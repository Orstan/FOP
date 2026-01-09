const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Знаходимо всі page.tsx файли крім головної сторінки
const files = glob.sync('app/**/page.tsx', {
  ignore: ['app/page.tsx']
});

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Видаляємо імпорт ArrowLeft якщо він є
  if (content.includes('ArrowLeft')) {
    content = content.replace(/,\s*ArrowLeft/g, '');
    content = content.replace(/ArrowLeft,\s*/g, '');
    content = content.replace(/import\s*{\s*ArrowLeft\s*}\s*from\s*["']lucide-react["'];?\s*\n/g, '');
    modified = true;
  }

  // Видаляємо локальний header з стрілкою назад
  const headerRegex = /<header className="border-b bg-white\/80 dark:bg-gray-950\/80 backdrop-blur-sm sticky top-0 z-50 print:hidden">[\s\S]*?<\/header>\s*/;
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, '');
    modified = true;
  }

  // Видаляємо ThemeToggle імпорт якщо тепер не використовується
  if (!content.includes('<ThemeToggle') && content.includes('ThemeToggle')) {
    content = content.replace(/import\s*{\s*ThemeToggle\s*}\s*from\s*["']@\/components\/theme-toggle["'];?\s*\n/g, '');
    content = content.replace(/,\s*ThemeToggle/g, '');
    content = content.replace(/ThemeToggle,\s*/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ Updated: ${file}`);
  } else {
    console.log(`- Skipped: ${file} (no changes needed)`);
  }
});

console.log('Done!');
