
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('.my_app');

  createApp({
    data() {
      return {
        message: 'Hello Vue App 2!'
      }
    }
  }).mount('#my_app2');
