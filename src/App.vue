<template>
  <div id="app">
    <div class="brand">
      <img src="./assets/logo.png" alt="Pepix Helper">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'style';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 5% 20%;

  & .brand {
    text-align: center;
  }
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
