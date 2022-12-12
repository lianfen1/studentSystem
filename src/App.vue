<script>
export default{
    created(){
     this.$store.dispatch('load')
  }
}
</script>

<template>
    <router-view></router-view>
</template>

<style scoped>

</style>
