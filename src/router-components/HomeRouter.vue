<template>
  <pages :active="active"></pages>
</template>
<script>
  import pages from '../components/Pages.vue'

  export default {
    name: 'homeRouter',
    components: {
      pages
    },
    data(){
      return {
      }
    },
    computed: {
      active(){
        return this.$store.state.selected
      }
    }
  }
</script>

<style>

</style>