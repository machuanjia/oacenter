<template>
  <div id="register">
    <Button type="primary" @click="postFn()">Primary</Button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'register',
    methods: {
      postFn() {
        axios.post('http://localhost:3000/users/login', {name: 'macj'})
          .then((res) => {
            debugger
          })
          .catch((err) => {
            if (err) {
              console.log(err)
            }
          })
      }
    }
  }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import "../../../scss/style";
</style>
