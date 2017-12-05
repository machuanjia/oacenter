<template>
  <div id="register">
    <Button type="primary" @click="postFn()">Primary</Button>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'register',
    methods: {
      postFn() {
        axios.post('http://localhost:3000/users/login', qs.stringify({ 'name': 123 }))
          .then((res) => {
            console.log(res)
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
