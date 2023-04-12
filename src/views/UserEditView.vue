<template>
    <div>
        <button @click="login()">
            Login
        </button>
    </div>
    <div>
        <h2>Editar users</h2>
        <pre>
            dados da rota atual
            {{ $route }}
        </pre>
        {{ $route.params.id }} <br>
        {{ $route.name }} <br>
        {{ $route.href }} <br>
        {{ $route.query.page }}
    </div>

    <div>
        <pre>
            Funcionalidades do esquema de roteamento
            {{ $router }}
        </pre>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route);
        console.log(this.$route.query.page);
        console.log(this.$router);
    },
    methods: {
        login() {
            // ajax login
            // this.$router.push('/about');

            // maior peso 
            this.$router.push({ name:'service'});
            console.log('chegou');
        }
    }
    
}
</script>
<style>
    
</style>