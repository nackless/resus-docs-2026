import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_WIDTH = 1920;
const QUALITY = 82;

const SRC_CONTENT_ASSETS = path.join(process.cwd(), 'src', 'content', 'assets');
const PUBLIC_ASSETS = path.join(process.cwd(), 'public', 'assets');
const ROOT_ASSETS = path.join(process.cwd(), 'assets');

// Sync src/content/assets -> public/assets & assets/
function syncDirectories() {
  const dirsToEnsure = [PUBLIC_ASSETS, ROOT_ASSETS];
  dirsToEnsure.forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  if (fs.existsSync(SRC_CONTENT_ASSETS)) {
    const files = fs.readdirSync(SRC_CONTENT_ASSETS);
    for (const file of files) {
      const srcFile = path.join(SRC_CONTENT_ASSETS, file);
      if (fs.statSync(srcFile).isFile()) {
        dirsToEnsure.forEach(targetDir => {
          const destFile = path.join(targetDir, file);
          fs.copyFileSync(srcFile, destFile);
        });
      }
    }
  }
}

const TARGET_DIRS = [
  SRC_CONTENT_ASSETS,
  ROOT_ASSETS,
  PUBLIC_ASSETS,
  path.join(process.cwd(), 'public', 'attachments'),
];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      continue;
    }

    console.log(`[Optimize Images] Inspecting: ${filePath}`);

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = image.clone();

      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        console.log(`  └─ Downscaling from ${metadata.width}px to ${MAX_WIDTH}px`);
      }

      // Convert & compress original file format
      const buffer = await pipeline.toBuffer();
      fs.writeFileSync(filePath, buffer);

      // Generate WebP twin if not already webp
      if (ext !== '.webp') {
        const webpPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
        await sharp(buffer).webp({ quality: QUALITY }).toFile(webpPath);
        console.log(`  └─ Generated WebP asset: ${webpPath}`);
      }

      console.log(`  └─ Optimized successfully!`);
    } catch (err) {
      console.error(`[Error] Failed to process ${filePath}:`, err.message);
    }
  }
}

async function run() {
  console.log('=== Starting Resus Docs Automated Image Optimization & Sync Engine ===');
  syncDirectories();
  for (const dir of TARGET_DIRS) {
    await processDirectory(dir);
  }
  console.log('=== Image Optimization Engine Complete ===');
}

run();
