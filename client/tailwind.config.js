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
            'xanh': ['Xanh Mono, monospace'],
            'mono': ['Space Mono', 'monospace'],
            'serif': ['DM Serif Display', 'serif']
        },
        backgroundImage: {
            'gradient-central': "url('src/assets/grainy-rose.svg')",
            // 'gr': 'gradient-to-r from-cyan-500 to-blue-500', // not working even though it's tailwind docs syntax
            'gradient-0': 'linear-gradient(to right, #FBB6FF 0%, #f77774 60%, #FF6F0F 100%)', // Example gradient
            'gradient-1': 'linear-gradient(to right, #FBB6FF66 0%, #00ff0066 100%)', // Example gradient
        },
        maxWidth: {
            "content": "max-content"
        }

    },
    boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
    },
    plugins: [
        require('daisyui'),
    ],
}