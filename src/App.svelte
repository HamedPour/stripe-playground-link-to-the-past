<script lang="ts">
  import { onMount } from "svelte";

  async function makePostRequest() {
    try {
      const response = await fetch(
        "http://localhost:3000/create-checkout-session",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, qty: 3 },
              { id: 2, qty: 5 },
            ],
          }),
        }
      );
      if (response.ok) {
        console.log("RES OKAY");
        console.log("SHOW ME THE DATA", response);
      }
      //   const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<main>
  <h1>What say you server?</h1>
  <button class="btn btn-primary" on:click={makePostRequest}
    >Make Post Request</button
  >
</main>
