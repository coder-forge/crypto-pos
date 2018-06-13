<template>
  <div>
    <v-container style="text-align: center" v-if="showQR">
      <h1>QR</h1>
      <div>
        <v-btn :to="{name: 'Calc'}" data-val="Back">
          Back
        </v-btn>
      </div>
      <ul>
        <li>Amount: {{coins}}</li>
        <li>Shop Address: {{address}}</li>
        <li>Chain: {{chain}}</li>
      </ul>
      <vue-qr :text="this.text" height="200" width="200"></vue-qr>
    </v-container>

    <v-container style="text-align: center" v-if="loading">
      <h3>Chaining blocks together...</h3>
    </v-container>
  </div>
</template>

<script scoped>
import VueQr from 'vue-qr'
import axios from 'axios'

export default {
  created: async function () {
    console.log('pinging index...')
    let res, euro
    try {
      res = await axios.get('https://api.coinmarketcap.com/v1/ticker/' + this.chain + '/?convert=EUR')
    } catch (e) {
      throw new Error(e)
    }
    // 1e = 1/res.data[0].price_eur
    euro = 1 / res.data[0].price_eur
    this.coins = euro * this.amount
    console.info(`transferring ${this.chain} [${this.coins}]`)
    this.showQR = true
    this.loading = false
  },
  data () {
    return {
      amount: this.$route.params.amount || 0,
      address: this.$route.params.address || 0x0,
      chain: this.$route.params.chain || null,
      text: this.chain + ':' + this.address + '?amount=' + this.amount + '&label=CoderForge%20is%20cool',
      coins: 0,
      loading: true,
      showQR: false
    }
  },
  methods: {
  },
  components: {VueQr}
}
</script>
