<template>
  <v-container style="text-align: center">
    <h1>QR</h1>
    <div>
      <v-btn :to="{name: 'Calc'}" data-val="Back">
        Back
      </v-btn>
    </div>
    <ul>
      <li>Amount: {{amount}}</li>
      <li>Shop Address: {{address}}</li>
      <li>Chain: {{chain}}</li>
    </ul>
    <vue-qr :text="this.text" height="200" width="200"></vue-qr>
  </v-container>
</template>

<script scoped>
import VueQr from 'vue-qr'

export default {
  data () {
    return {
      amount: this.$route.params.amount || 0,
      address: this.$route.params.address || 0x0,
      chain: this.$route.params.chain || null,
      text: this.chain + ':' + this.address + '?amount=' + this.amount + '&label=CoderForge%20is%20cool'
    }
  },
  components: {VueQr}
}
</script>
