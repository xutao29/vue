<template>
  <p class="css">{{ loginSuccess }}</p>
</template>

<script>
export default {
  data() {
    return {
      loginSuccess: "登陆成功！"
    };
  }
};
</script>

<style scoped>
.css{
    color: #f00;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace
} 
</style>
