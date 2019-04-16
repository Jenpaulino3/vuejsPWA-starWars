<template>
  <div>
    <h2>Select a category to continue</h2>
    <ul>
      <li>
        <router-link to="/people">
          <p>People</p>
        </router-link>
      </li>
      <li>
        <p>Films</p>
      </li>
      <li>
        <p>Starships</p>
      </li>
      <li>
        <p>Vehicles</p>
      </li>
      <li>
        <p>Species</p>
      </li>
      <li>
        <p>Planets</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>