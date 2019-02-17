<template>
  <div>
    <div class="page-style">{{page}}</div>
    <input class="input-style" type="text" v-model="inputUserName">
    <br>
    <input class="input-style" type="password" v-model="inputPassword">
    <br>
    <input class="button-style" type="button" :value="buttonName" @click="login">
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUserName: "",
      inputPassword: "",
      page: "demo1 登陸頁面",
      buttonName: "登陆"
    };
  },
  methods: {
    login: function() {
      const fromData = {
        inputUserName: this.inputUserName,
        inputPassword: this.inputPassword
      };

      const result = this.$api.Account.login(fromData);

      if (result.code === 1) {
        this.$router.push("/main");
      } else {
        alert("登陸失敗");
      }
    }
  }
};
</script>

<style scoped>
.page-style{
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  color: firebrick;
  margin-bottom: 40px;
}

.input-style {
  border: 1px solid #2b208f;
  margin-bottom: 10px;
  border-radius: 10px;
}

.button-style {
  border-radius: 10px;
  color: #2b208f;
  font-family: 'Courier New', Courier, monospace;
  padding: 5px
}
</style>