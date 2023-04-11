<template>
    <header>
        <div>

            <h1 class="title">
                <slot name="title" />
            </h1>

            <div class="description">
                <slot name="description" />
            </div>
        
            <div class="content">
                <slot />
            </div>     
        
        </div>
    </header> 
       
  
</template>

    <script>
        export default {
          
            mounted() {
                console.log(this.$el);
                console.log(this.$slots);
            }
        }
    </script>

<style>
    header {
        background: #000;
        color: aliceblue;
    }

</style>