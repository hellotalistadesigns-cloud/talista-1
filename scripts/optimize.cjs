const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await optimizeDir(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const stats = fs.statSync(fullPath);
      const originalSize = stats.size;
      
      try {
        const buffer = fs.readFileSync(fullPath);
        const image = sharp(buffer);
        const meta = await image.metadata();

        let pipeline = sharp(buffer);
        // Max width 1600px for ultra-sharp retina mobile & desktop viewports
        if (meta.width && meta.width > 1600) {
          pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
        }

        let optimizedBuffer;
        if (/\.png$/i.test(entry.name)) {
          optimizedBuffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
        } else {
          optimizedBuffer = await pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toBuffer();
        }

        if (optimizedBuffer.length < originalSize) {
          fs.writeFileSync(fullPath, optimizedBuffer);
          const savedKB = ((originalSize - optimizedBuffer.length) / 1024).toFixed(1);
          const pct = Math.round((1 - optimizedBuffer.length / originalSize) * 100);
          console.log(`[OPTIMIZED] ${entry.name}: ${(originalSize/1024).toFixed(1)}KB -> ${(optimizedBuffer.length/1024).toFixed(1)}KB (-${pct}%, saved ${savedKB}KB)`);
        } else {
          console.log(`[OK] ${entry.name}: already optimal`);
        }
      } catch (err) {
        console.error(`[ERROR] ${entry.name}:`, err.message);
      }
    }
  }
}

optimizeDir(path.join(__dirname, '..', 'public', 'assets')).then(() => {
  console.log('\nAll assets optimized successfully!');
});
