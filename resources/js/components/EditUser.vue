<template>
    <div>
        <h3 class="text-center">Editar Usuario</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateUser">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <button type="submit" class="btn btn-primary">Actualizar Usuario</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/user/${this.$route.params.id}`)
                .then((response) => {
                    this.user = response.data;
                    // console.log(response.data);
                });
        },
        methods: {
            updateUser() {
                this.axios
                    .post(`http://localhost:8000/api/user/${this.$route.params.id}`, {
                    _method:'PUT',
                    name:this.user.name,
                    email:this.user.email
                    })
                    .then((response) => {
                      console.log(response);
                        this.$router.push({name: 'home'})
                    });
            }
        }
    }
</script>
