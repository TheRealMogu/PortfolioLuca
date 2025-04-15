// Script per build solo frontend
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Creare la cartella di output se non esiste
const outputDir = path.join(__dirname, 'frontend-dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Eseguire il build del frontend
console.log('Building frontend...');
execSync('cd client && npx vite build', { stdio: 'inherit' });

// Copiare il frontend build nella cartella di output
console.log('Copying frontend build to output directory...');
execSync(`cp -r client/dist/* ${outputDir}/`, { stdio: 'inherit' });

console.log('Frontend build complete!');