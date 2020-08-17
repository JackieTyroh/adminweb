<template>
  <div class="login">
    <h1>Admin Login</h1>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="login">Login</button>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.$router.replace('home')
          },
          function(err) {
            alert("Oops" + err.message);
          }
        );
    }
  }
};
</script>
<style scoped>
.login {
  margin-top: 10em;
}
input {
  margin: 10px 0;
  width: 30%;
  padding: 15px;
  border-radius: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
  border-radius: 15px;
}
</style>
