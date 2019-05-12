<template>
  <div id="app">
    
    <Headers/>
    <router-view/>
    <Footers/>
  </div>
</template>

<script>
import Headers from './components/Header'
import Footers from './components/Footer'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Headers,
    Footers
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    color: rgb(141,144,149);
    font-family: 微软雅黑, Arial, Helvetica,Verdana,sans-serif;
    font-style: normal;
    font-weight: normal;
    background: #ffffff;
    background-size: cover;
    display: block; 
    overflow-x: hidden;
}
#app{
  
  width: 100%;
}
a{text-decoration:none;}
</style>
