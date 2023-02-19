<script lang="ts">
    import CheckoutForm from "./components/CheckoutForm.svelte"


    import {loadStripe} from "@stripe/stripe-js"
    import {onMount} from "svelte"

    let stripe = null


    onMount(async () => {
        stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
    })


</script>


<main>

    <CheckoutForm {stripe} />

</main>

<style global>
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>