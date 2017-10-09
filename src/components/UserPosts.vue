<template>
  <div>
    <h1>route:{{ JSON.stringify($route.params) }}</h1>
    <h2>{{msg}}</h2>
    <h2>UserPosts List</h2>
  </div>
</template>

<script>
  export default {
    name: 'UserPosts',
    data () {
      return {
        msg: 'Welcome to Your UserPosts'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
