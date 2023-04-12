<template>
    <div :class="baseClass">
       
        {{ test }}

        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: ''
        },
        test: {
            // type: String,
            // default: 'test',
            
            type: Object,            
            default: () => {
                return {}
            }
        },
    },

    computed: {
        baseClass() {
            return [
                'alert',
                this.status ? `alert-${this.status}` : ''
            ]
        }
    }
    
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