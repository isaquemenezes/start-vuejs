<template>
    <div :class="baseClass">

        <slot></slot>

        <button 
            @click="onClick()"
        >
            fechar
        </button>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: ''
        },
        
    },

    computed: {
        baseClass() {
            return [
                'alert',
                this.status ? `alert-${this.status}` : ''
            ]
        }
    },
    methods: {
        onClick() {
            this.$emit('close');
            console.log('Clickou!');
        }
    }
    
}
</script>

<style scoped>
    .alert {
        display: flex;
        justify-content: space-between;
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