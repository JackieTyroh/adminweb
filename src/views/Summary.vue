<template>
  <div id="summary">
    <h1>Summary</h1>
   <div class="container-fluid">
     <div class="row">
     <div class="col-md-2"> <Menu/></div>
   <div class="col-md-10">
            <table class="table">
                <thead>
                    <tr>
                        <th >Site</th>
                        <th>Species</th>
                        <th>Price (Tsh)</th>
                        <!-- <th>Actions</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.key">
                    <b-tr>
                      <b-th rowspan="3">{{ user.site }}</b-th>
                      <b-td >{{ user.spiece }}</b-td>
                      <b-td>{{ user.price }}</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>{{ user.spiece2 }}</b-td>
                      <b-td>{{ user.price2 }}</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th class="text-right">{{ user.spiece3 }}</b-th>
                      <b-td>{{ user.price3 }}</b-td>
                    </b-tr>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
   </div>
  </div>
</template>

<script>
   import { db } from '@/main';
   import Menu from "@/components/Menu.vue";
    
    export default {
      components: {
        Menu,
      },
        data() {
            return {
                Users: []
            }
        },
        created() {
            db.collection('Data').onSnapshot((snapshotChange) => {
                this.Users = [];
                snapshotChange.forEach((doc) => {
                    this.Users.push({
                        key: doc.id,
                        spiece: doc.data().spiece,
                        spiece2: doc.data().spiece2,
                        site: doc.data().site,
                        price: doc.data().price,
                        price2: doc.data().price2,
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("Data").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>