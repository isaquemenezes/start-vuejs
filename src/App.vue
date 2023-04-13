<template>
 
<AppButton
  data-vue="Madara"
  @update="getUpdate"
  variant="danger"
>
  Save
  <template #icon>Icon

  </template>
</AppButton>
</template>

<script>


import AppButton from '@/components/AppButton.vue'
export default {
  name: 'App',
  components :{
    AppButton
   
  },
  setup() {
    const getUpdate = (data) => {
      console.log('get Update...', data);
    }

    return {
      getUpdate
    }
  }


 
}

</script>
<style>

</style>
