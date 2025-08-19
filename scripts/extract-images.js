/**
 * Pine Ink Tattoos Image Extraction Script
 * 
 * This script helps extract and organize images from the Pine Ink Tattoos website
 * Follow the steps below to extract images systematically
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  targetUrls: [
    'https://www.pineinktattoos.com/',
    'https://www.pineinktattoos.com/about-1',
    'https://www.pineinktattoos.com/copy-of-about'
  ],
  outputDir: './public/images/pineinktattoos',
  categories: {
    work: 'tattoo photos, healed tattoos, portfolio pieces',
    artists: 'artist photos, headshots, team pictures',
    shop: 'interior photos, exterior shots, studio images',
    branding: 'logos, signs, brand elements'
  }
};

// Helper function to create image inventory
function createImageInventory() {
  const inventory = {
    extracted: new Date().toISOString(),
    sources: config.targetUrls,
    categories: config.categories,
    images: {
      work: [],
      artists: [],
      shop: [],
      branding: []
    }
  };

  // Save inventory template
  fs.writeFileSync(
    path.join(config.outputDir, 'image-inventory.json'),
    JSON.stringify(inventory, null, 2)
  );

  console.log('✅ Image inventory template created at:', path.join(config.outputDir, 'image-inventory.json'));
}

// Helper function to generate SEO-friendly filenames
function generateSEOFilename(originalName, category, description = '') {
  const cleanName = originalName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  const prefix = category === 'work' ? 'tattoo-' : 
                category === 'artists' ? 'artist-' :
                category === 'shop' ? 'shop-' : 'brand-';
  
  return `${prefix}${description ? description + '-' : ''}${cleanName}`;
}

// Manual extraction instructions
function printExtractionInstructions() {
  console.log('\n🎯 PINE INK TATTOOS IMAGE EXTRACTION GUIDE');
  console.log('=' .repeat(50));
  
  console.log('\n📋 STEP 1: Manual Image Extraction');
  console.log('Visit each URL and manually download relevant images:');
  config.targetUrls.forEach((url, index) => {
    console.log(`${index + 1}. ${url}`);
  });
  
  console.log('\n📁 STEP 2: Organize Images by Category');
  Object.entries(config.categories).forEach(([category, description]) => {
    console.log(`\n${category.toUpperCase()}/`);
    console.log(`  Purpose: ${description}`);
    console.log(`  Location: ./public/images/pineinktattoos/${category}/`);
  });
  
  console.log('\n🏷️  STEP 3: Rename Images for SEO');
  console.log('Examples of good filenames:');
  console.log('  ❌ IMG_1234.jpg');
  console.log('  ✅ tattoo-black-rose-arm-piece.jpg');
  console.log('  ❌ photo.png');
  console.log('  ✅ artist-maria-headshot.jpg');
  console.log('  ❌ DSC_5678.jpg');
  console.log('  ✅ shop-interior-main-room.jpg');
  
  console.log('\n🔧 STEP 4: Optimize Images');
  console.log('  • Resize: Max 1200px width for galleries, 400px for thumbnails');
  console.log('  • Format: .webp for photos, .png for logos/graphics');
  console.log('  • Compress: Use tools like TinyPNG or ImageOptim');
  
  console.log('\n📝 STEP 5: Update Inventory');
  console.log('  • Edit image-inventory.json as you add images');
  console.log('  • Include source URL, alt text, and category for each image');
  
  console.log('\n🚀 STEP 6: Integration');
  console.log('  • Images will be available at /images/pineinktattoos/[category]/[filename]');
  console.log('  • Update React components to use the new images');
  console.log('  • Add proper alt text for accessibility');
}

// Browser automation script template (for advanced users)
function generatePuppeteerScript() {
  const puppeteerScript = `
// Advanced: Automated image extraction with Puppeteer
// npm install puppeteer

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function extractImages() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  const urls = ${JSON.stringify(config.targetUrls, null, 2)};
  
  for (const url of urls) {
    console.log(\`Extracting from: \${url}\`);
    await page.goto(url);
    
    // Find all images
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt || '',
        width: img.naturalWidth,
        height: img.naturalHeight
      })).filter(img => 
        img.width > 200 && 
        img.height > 200 && 
        !img.src.includes('data:') &&
        !img.src.includes('placeholder')
      );
    });
    
    console.log(\`Found \${images.length} relevant images\`);
    
    // Download images (implement download logic here)
    for (const img of images) {
      // Add your download logic
      console.log('Image:', img.src);
    }
  }
  
  await browser.close();
}

// Uncomment to run: extractImages();
`;

  fs.writeFileSync('./scripts/automated-extraction.js', puppeteerScript);
  console.log('✅ Automated extraction script created at: ./scripts/automated-extraction.js');
}

// Main execution
function main() {
  // Ensure directories exist
  Object.keys(config.categories).forEach(category => {
    const dir = path.join(config.outputDir, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  createImageInventory();
  printExtractionInstructions();
  generatePuppeteerScript();
  
  console.log('\n✨ Setup complete! Follow the instructions above to extract images.');
  console.log('💡 Tip: Start with manual extraction, then consider automation for larger sites.');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSEOFilename, config };