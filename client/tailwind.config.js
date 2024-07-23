/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            'mono': ['Space Mono', 'monospace'],
            'serif': ['Abril Fatface', 'serif']
        },
        backgroundImage: {
            'gradient-central': "url('src/assets/grainy-rose.svg')",
        }
    },
    boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
    },
    plugins: [
        require('daisyui'),
    ],
}