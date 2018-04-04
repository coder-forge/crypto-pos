<template>
  <div id="app">
    <div class = "container mdl-shadow--2dp">
         <div class = "bar">
            <button id = "demo_menu-lower-left"
               class = "mdl-button mdl-js-button mdl-button--icon"
               data-upgraded = ",MaterialButton">
               <i class = "material-icons">more_vert</i>
            </button>
            <ul class = "mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
               for = "demo_menu-lower-left">
               <li class = "mdl-menu__item">Item #1</li>
               <li class = "mdl-menu__item">Item #2</li>
               <li disabled class = "mdl-menu__item">Disabled Item</li>
            </ul>
         </div>
         <div class = "background"></div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
