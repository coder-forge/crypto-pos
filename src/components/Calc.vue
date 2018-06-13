<template>
  <v-container fluid>

    <p>
      <ul>
        <li>Repo: <a href="https://github.com/coder-forge/crypto-pos" target="_new">https://github.com/coder-forge/crypto-pos</a></li>
        <li>Moqup: <a href="https://app.moqups.com/coderforge.dublin@gmail.com/Rg9grfYN7e/view/page/aa9df7b72" target="_new">https://app.moqups.com/coderforge.dublin@gmail.com/Rg9grfYN7e/view/page/aa9df7b72</a></li>
      </ul>
    </p>

    <v-card class="mdl-card mdl-shadow--2dp">
      <v-card-title primary-title>
        <h2 class="mdl-card__title-text" id="display">{{currentVal}}</h2>
      </v-card-title>
      <v-card-actions>
        <div class="mdl-card__supporting-text calc">
          <div class="controllers">
            <v-btn color="warning" v-on:click="operation('C')" data-val="clear">
              C
            </v-btn>
            <v-btn color="warning" v-on:click="operation('/')" data-val="/">
              &divide;
            </v-btn>
            <v-btn color="warning" v-on:click="operation('*')" data-val="*">
              &times;
            </v-btn>
            <v-btn color="warning" v-on:click="operation('-')" data-val="-">
              &minus;
            </v-btn>
            <v-btn color="warning" v-on:click="operation('+')" data-val="+">
              &plus;
            </v-btn>
            <v-btn color="warning" v-on:click="operation('=')" data-val="equals">
              &equals;
            </v-btn>
          </div>
          <div class="numbers">
           <v-btn v-on:click="number(7)" data-val="7">
              7
            </v-btn>
           <v-btn v-on:click="number(8)" data-val="8">
              8
            </v-btn>
            <v-btn v-on:click="number(9)" data-val="9">
              9
            </v-btn>
            <v-btn v-on:click="number(4)" data-val="4">
              4
            </v-btn>
           <v-btn v-on:click="number(5)" data-val="5">
              5
            </v-btn>
            <v-btn v-on:click="number(6)" data-val="6">
              6
            </v-btn>
            <v-btn v-on:click="number(1)" data-val="1">
              1
            </v-btn>
           <v-btn v-on:click="number(2)" data-val="2">
              2
            </v-btn>
            <v-btn v-on:click="number(3)" data-val="3">
              3
            </v-btn>
            <v-btn v-on:click="number(0)" data-val="0">
              0
            </v-btn>
            <v-btn v-on:click="number('.')" data-val=".">
              .
            </v-btn>
            <v-btn v-on:click="go()" data-val="Go">
              Go
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script scoped>
// import router from 'vue-router'
export default {
  name: 'Calc',
  data () {
    return {
      address: 0x0,
      currentVal: 0,
      chain: 'ethereum'
    }
  },
  methods: {
    go: function () {
      this.$router.push('/qr/' + this.chain + '/' + this.address + '/' + this.currentVal)
    },
    operation: function (char) {
      let result = 0
      const func = (_char) => ({
        '/': function () {
          console.log('we\'re dividing')
        },
        '+': function () {
          console.log('we\'re adding')
        },
        '-': function () {
          console.log('we\'re subtracting')
        },
        '*': function () {
          console.log('we\'re multiplying')
        },
        '=': function () {
          console.log('we\'re equalising')
        },
        'C': function () {
          result = 0
        }
      })[_char]

      const op = func(char)
      op()
      this.currentVal = result
    },
    number: function (num) {
      if (this.currentVal === 0 && num !== '.') this.currentVal = num
      else {
        this.currentVal += '' + num
      }
      // 1. get current num
      // 2. concat
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 400px;
  margin: 15px auto;
  .mdl-card {
    width: 100%;
    .mdl-card__title {
      color: #fff;
      background-color: rgba(#e91e63, 0.85);
      height: 65px;
      width: 100%;
      display:table;
      word-wrap: break-word;
      word-break: break-all;
    }
    .calc {
      .controllers, .numbers {
        width: 210px;
        margin: auto;
        display: block;
        padding: 10px;
      }
      button {
        margin: 5px;
      }

      .numbers {
        button {
        color: rgba(0,0,0, 0.75);
        }
      }
    }

  }
}
</style>
