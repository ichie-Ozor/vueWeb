<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'contact'}">Contact</router-link> |
    <router-link :to="{name:'job'}">Job</router-link> 
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>


<script>
export default {
  methods: {
    redirect(){
      // this.$router.push('/')
      this.$router.push({name: 'home'})      
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(+1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
}

nav a {
  padding: 50px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(239, 220, 15)
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
