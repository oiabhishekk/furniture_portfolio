import fs from 'fs';
import path from 'path';

const srcRoot = 'references';
const destRoot = 'public/images/references';

const foldersMapping = {
  'cornice design': 'cornice',
  'wardeobe': 'wardrobe',
  'woodenfurniture': 'furniture'
};

function toUrlFriendlyName(filename) {
  const ext = path.extname(filename);
  const nameWithoutExt = path.basename(filename, ext);
  const friendly = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric with hyphen
    .replace(/-+/g, '-')        // Remove duplicate hyphens
    .replace(/^-|-$/g, '');     // Trim trailing/leading hyphens
  return `${friendly}${ext}`;
}

function copyRecursiveSync(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    const srcPath = path.join(srcDir, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyRecursiveSync(srcPath, path.join(destDir, item));
    } else {
      const friendlyName = toUrlFriendlyName(item);
      const destPath = path.join(destDir, friendlyName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

console.log('Starting assets transfer...');
for (const [srcFolder, destFolder] of Object.entries(foldersMapping)) {
  const fullSrc = path.join(srcRoot, srcFolder);
  const fullDest = path.join(destRoot, destFolder);
  if (fs.existsSync(fullSrc)) {
    console.log(`Processing folder: ${srcFolder} -> ${destFolder}`);
    copyRecursiveSync(fullSrc, fullDest);
  } else {
    console.warn(`Source folder does not exist: ${fullSrc}`);
  }
}
console.log('Assets transfer complete!');
