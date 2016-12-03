<template>
  <items :active="active"></items>
</template>
<script>
  import items from '../components/Items.vue'

  export default {
    name: 'homeRouter',
    components: {
      items
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