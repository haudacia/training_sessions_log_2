/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            'cutive': ['Cutive Mono, monospace'],
            'victor': ['Victor Mono, monospace'],
            'xahn': ['Xahn Mono, monospace'],
            'mono': ['Space Mono', 'monospace'],
            'serif': ['DM Serif Display', 'serif']
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