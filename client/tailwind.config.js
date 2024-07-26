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
            'shape-gradient': "url('src/assets/shape-gradient.svg')",
            // 'gr': 'gradient-to-r from-cyan-500 to-blue-500', // not working even though it's tailwind docs syntax
            'gradient-0': 'linear-gradient(to right, #FBB6FF 0%, #fff200 100%)',
            'gradient-1': 'linear-gradient(to right, #FBB6FF 0%, #00ff0066 100%)',
            'gradient-2': 'linear-gradient(to bottom, #ff6d9100 0%, #ff6d9115 20%, #ff6d9140 40%, #ff6d9170 60%, #ff6d91 100%)',
            'gradient-3': 'linear-gradient(to bottom, #00000000 0%, #fff20015 20%, #fff20040 40%, #fff20070 60%, #fff200 100%)',
        },

        maxWidth: {
            "content": "max-content"
        },
        boxShadow: {
            'glow': '0 0 30px 10px rgba(255, 255, 0, 1)',

        },

    },
    plugins: [
        require('daisyui'),
    ],
}