<template>
<!-- <Sidebar/> -->
<div :style="{'margin-left':sidebarWidth}">
   <router-view />
</div>
 
</template>

<script lang="js">
// import Sidebar from '@components/Sidebar'
// import {sidebarWidth} from '@components/state'

export default {
  // components:{Sidebar},
  // setup(){
  //   return{sidebarWidth}
  // },
  name: 'App',
 
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
