```javascript
// Ensure your tailwind.config.js is correctly configured
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// make sure you run npm install postcss autoprefixer tailwindcss and then
npm run build // or similar command for your build process.

// Import tailwind directives in your css file like so
@tailwind base;
@tailwind components;
@tailwind utilities;

// Your HTML should then work as expected
<div class="bg-red-500 hover:bg-blue-700">
  <p>This text should be red, and turn blue on hover.</p>
</div>
```