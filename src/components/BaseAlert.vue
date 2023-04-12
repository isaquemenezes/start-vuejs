<template>
    <div :class="baseClass">
        <slot />
        <!-- <p>{{ text }}</p>         -->
    </div>
</template>

<script>
export default {
    props: [
        'status',
        // 'text'
    ],
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