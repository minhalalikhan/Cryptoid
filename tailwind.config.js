/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customGray: '#202127',
                customDarkGray: '#1c1c1f'
            }
        },
    },
    plugins: [],
}