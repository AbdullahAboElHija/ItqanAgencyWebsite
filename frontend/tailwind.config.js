/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#059669", // Emerald 600 - Fresh & Professional
                secondary: "#1e293b", // Slate 800
                accent: "#f59e0b", // Amber 500
                dark: "#0f172a", // Slate 900
                light: "#f8fafc", // Slate 50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                arabic: ['Cairo', 'sans-serif'],
                heebo: ['Heebo', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
