<template>
    <header>
         Header
    </header> 
       
  
</template>

    <script>
        export default {
            mounted(){
                window.addEventListener('resize', this.resize)
            },
            beforeUnmount() {
                console.log('Before Unmount');
                window.removeEventListener('resize', this.resize)
            },

            // unmounted() {
            //     console.log('unmounted');
            // }

            methods: {
                resize($ev) {
                    console.log($ev);
                }
            }
            
        }
    </script>

<style>
    header {
        background: #000;
        color: aliceblue;
    }

</style>