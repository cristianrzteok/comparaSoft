<template>
    <div>
        <h3 class="text-center">Crear Usuario</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <button type="submit" class="btn btn-primary">Crear Usuario</button>
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
        methods: {
            addUser() {

                this.axios
                    .post('http://localhost:8000/api/user', this.user)
                    .then(response => (
                         this.$router.push({name: 'home'})
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
