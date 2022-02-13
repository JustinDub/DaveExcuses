<template>
  <div class="hello">
    <h1>Application de Dave</h1>
    <p>
      {{ excuse }}
    </p>
    <Button @changeExcuse="changeExcuse" v-bind:excuse= excuse />
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
  name: 'HelloWorld',
  data: function() {
    return {
      excuse: 'Aucune excuse pour le moment.'
    }
  },
  methods: {
    changeExcuse(newExcuse) {
      this.excuse = newExcuse
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
