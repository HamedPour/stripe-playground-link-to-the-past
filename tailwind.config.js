export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
    purge: false,
    plugins: [],
    theme: {
        extend: {
            colors: {
                "primary_gold": "#ab8f39",
                "secondary_gold": "#e89d0e",
                "zelda_red": "#fd380d",
                "zelda_silver": "#c5b5b9",
                "zelda_yellow": "#e89d0e",
                "zelda_black": "#15140f"


            },
            fontFamily: {
                "Press2P": ["Press Start 2P"]
            }
        },
        variants: {
            extend: {}
        }
    }
}

