<template>
  <v-offline
    online-class="online"
    offline-class="offline"
    @detected-condition="amIOnline">
    <template v-slot:[onlineSlot] :slot-name="onlineSlot">
      <p>( Online: {{ onLine }} )</p>
      <div id="app">
        <header>
          <span>
            <router-link to="/">Star Wars Shenanigans</router-link>
          </span>
        </header>
        <main>
          <img class="headerImg" :src="starWars"/>
          <router-view></router-view>
        </main>
      </div>
    </template>
    <template v-slot:[offlineSlot] :slot-name="offlineSlot">
      Why isn't this text displaying when offline?
    </template>
  </v-offline>
</template>

<script>
import VOffline from 'v-offline'
export default {
  name: 'app',
  components: {
    VOffline
  },
  data () {
    return {
      onLine: null,
      onlineSlot: 'online',
      offlineSlot: 'offline',
      starWars: require('../static/img/star-wars.jpg'),
      offlineIcon: require('../static/img/offline_icon.svg')
    }
  },
  methods: {
    amIOnline(e) {
      this.onLine = e
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

/* .offline {
  background-color: #fc9842;
  background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
}
.online {
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
} */

</style>
