<script>
    import {CardCvc, CardExpiry, CardNumber, Elements} from "svelte-stripe"

    let zeldaCoverArt = "src/assets/zelda_SNES.jpg"
    let price = 59.99
    let cardElement
    let error
    export let stripe


</script>

{#if error}
    <p class="error">{error.message} Please try again.</p>
{/if}
{#if stripe}
    <Elements {stripe}>
        <div class=" max-w-[45vw] mx-auto gap-4 h-screen flex flex-col justify-center ">
            <h1 class="text-center my-4 text-[2rem] text-[#ae9338] drop-shadow-md">
                Zelda - A Link to the Past
            </h1>
            <div class="w-full grid grid-col-1 justify-center ">
                <img class="max-w-[250px] drop-shadow-lg"
                     src={zeldaCoverArt}
                     alt="Zelda cover">
                <h2
                        class=" text-center my-4 text-[2rem] text-[#a78b37] drop-shadow-md ">
                    ${price}
                </h2>
            </div>
            <div class="nes-field is-inline">
                <label for="field_name">Name</label>
                <input type="text"
                       id="field_name"
                       class="nes-input "
                       placeholder="Princess Zelda">
            </div>
            <div class="nes-field is-inline">
                <label for="field_email">Email</label>
                <input type="text"
                       id="field_email"
                       class="nes-input "
                       placeholder="zelda@snes.com">
            </div>
            <div class="nes-field is-inline">
                <label for="field_address">Address</label>
                <input type="text" id="field_address"
                       class="nes-input "
                       placeholder="Room 232 Hyrule Castle">
            </div>
            <div class="nes-field is-inline">
                <label for="field_city">City</label>
                <input type="text"
                       id="field_city"
                       class="nes-input "
                       placeholder="Sacred Realm">
            </div>
            <div class="nes-field is-inline">
                <label for="field_postcode">Postcode</label>
                <input type="text"
                       id="field_postcode"
                       class="nes-input "
                       placeholder="Z11 5DA">
            </div>

            <div class="nes-field is-inline">
                <label for="field_creditCard">Credit Card</label>
                <input name="name"
                       id="field_creditCard"
                       type="text"
                       class="nes-input "
                       placeholder="Your name"/>
            </div>

            <div class="nes-field is-inline  ">
                <label class="opacity-0">________</label>
                <div class="grid grid-cols-12 w-full">
                    <CardNumber bind:element={cardElement} classes={{ base:
                        "nes-input p-2 col-span-6" }}/>
                    <CardExpiry classes={{ base: "nes-input p-2 col-span-3" }}/>
                    <CardCvc classes={{ base: "nes-input p-2 col-span-3" }}/>
                </div>
            </div>

            <div class="nes-field mt-4 text-center">
                <button type="button" class="nes-btn is-success">
                        <span class="text-zelda_black">
                            Pay ${price}
                        </span>
                </button>
            </div>
        </div>

    </Elements>
{:else}
    Loading...
{/if}
