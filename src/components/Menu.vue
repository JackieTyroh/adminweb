<template>
  <div class="nav">

  <b-nav vertical class="w-25">
    <b-nav-item active><router-link to="/home">Dashboard</router-link></b-nav-item>
    <b-nav-item><router-link to="/logbook">Logbook</router-link></b-nav-item>
    <b-nav-item><router-link to="/summary">Summary Table</router-link></b-nav-item>
    <b-nav-item><router-link to="/logbook">Maps</router-link></b-nav-item>
    <b-nav-item disabled>You are an admin</b-nav-item>
    <button @click="logout">Logout</button>
  </b-nav>
  </div>

</template>

<script>
import firebase from 'firebase';
export default {
  name: "index",
  props: {
    msg: String
  },
   methods:{
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  margin-left: 29px;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;

}
a {
  color: #e9c46a;
}
.nav{
  text-align: center;
  float: left;
  margin-top: 40px;
  background-color: #264653;
  border-radius: 15px;
}
button{
background-color: #e9c46a;
border-radius: 30px;
margin-left: 5px;
margin-bottom: 5px
}

</style>

