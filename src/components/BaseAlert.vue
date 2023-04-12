<template>
    <div :class="['alert', {
        'alert-success': status === 'success',
        'alert-danger': status === 'danger'
    }]">
        Seu Formulário foi enviado com sucess!        
    </div>
</template>

<script>
export default {
    props: [
        'status'
    ]
    
}
</script>

<style scoped>
    .alert {
        padding: 3px;
        border-radius: .5rem;
        color: greenyellow;
    }
    .alert-success {
        background: green;
        color: #fff;
    }
    .alert-danger {
        background: red;
        color: #fff;
    }
</style>