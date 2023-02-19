export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
    purge: false,
    plugins: [],
    theme: {
        extend: {
            colors: {
                "primary_green": "#145332",
                "primary_light_green": "#28BFAE",
                "sand": "#F9E3BA",
                "orange": "#FF8E52",
                "pink": "#FF2981",
                "yellow": "#FFBF39",
                "dark_pink": "#3F071E",
                "dark_green": "#048F80"
            },
            fontFamily: {
                raj: "Rajdhani, serif"
            }
        },
        variants: {
            extend: {}
        }
    }
}

