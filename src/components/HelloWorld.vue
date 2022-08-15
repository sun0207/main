<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li @click="gotoPage">主模块其他修改</li>
      <li><a href="/main/micro1" target="_self" rel="noopener">a标签跳转micro1</a></li>
      <li><a href="/main/micro2" target="_self" rel="noopener">a标签跳转micro2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    gotoPage()  {
      this.$router.push("/main/micro1");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
