<template>
    <div>
        <h3 class="text-center">Todos los usuarios</h3><br/>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.created_at }}</td>
                <td>{{ user.updated_at }}</td>
                <td>
                    <div class="btn-toolbar" role="toolbar">
                        <router-link :to="{name: 'edit', params: { id: user.id }}" class="btn btn-primary">Editar</router-link>
                        <button class="btn btn-danger" @click="deleteUser(user.id)">Eliminar</button>
                        <router-link :to="{name: 'view', params: { id: user.id }}" class="btn btn-info">detalles</router-link>

                    </div>
                </td>
            </tr>
            </tbody>
        </table>


    </div>

</template>

<script>

    export default {
        data() {
            return {
                users: [],
                isModalVisible: false,
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/users')
                .then(response => {
                    this.users = response.data;
                    //console.log(response.data);
                });
        },
        methods: {
            deleteUser(id) {
                this.axios
                    .delete(`http://localhost:8000/api/user/${id}`)
                    .then(response => {
                        this.$router.go(0)
                    });
            }

        }
    }



</script>
