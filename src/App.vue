<template>
  <div id="app">
    <header>
      <span>
        <router-link to="/">Star Wars Shenanigans</router-link>
      </span>
    </header>
    <main>
      <div v-if="isOffline" class="offline">
        <p>
          You're offline
          <img class="offlineIcon" :src="offlineIcon"/>
        </p>
      </div>
      <img class="headerImg" :src="starWars"/>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      starWars: require('../static/img/star-wars.jpg'),
      offlineIcon: require('../static/img/offline_icon.svg')
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

header span a {
  color: #fff;
  text-decoration: none;
}

.headerImg {
  width: 100%;
}

button {
  text-transform: uppercase;
  font-size: 14px;
  padding: 12px;
}

.offline {
  margin-bottom: 50px;
}

.offline p {
  font-size: 28px;
}

.offlineIcon {
  height: 50px;
  margin-left: 2px;
  margin-bottom: -20px;
}

</style>
