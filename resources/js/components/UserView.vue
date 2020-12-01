<template>
    <div>
        <h3 class="text-center">Viendo Usuario {{user.name}} - ID : {{user.id}}</h3>
        <div class="row">
            <div class="col-md-12">
                    <div class="form-group col-6">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group col-6">
                        <label>email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>

                    <div class="form-group col-6">
                        <label>Registrado desde </label>
                        <input type="text" class="form-control" v-model="user.created_at">
                    </div>

                    <div class="form-group col-6">
                        <label>Actualizado el</label>
                        <input type="text" class="form-control" v-model="user.updated_at">
                    </div>

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
                    console.log(response.data);
                });
        }
    }
</script>
