<template>
<h1>Job page</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key='job.id' class="job">
    <router-link :to="{ name: 'jobDetails', params: { id: job.id }}">
      <h2>{{ job.title }} </h2>
    </router-link>  
  </div>
  </div>
  <div v-else>
    loading jobs...
  </div>
</template>

<script>
export default {
  data() {
    return {
        jobs: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then((res) => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
.job{
    /* display: flex;
    justify-content: center;
    align-items: center;
    background: crimson;
    padding: 20px auto;
    margin: 10px auto;
    height: 70px; */
}
.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  }
.job h2:hover{
  background: #ddd;
}
.job a{
  text-decoration: none;
}
.title{
  font-size: 19px;
  font-weight: 700;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 2px solid white;
}
.detail{
    font-size: 16px;
    font-weight: 500;
}
</style>