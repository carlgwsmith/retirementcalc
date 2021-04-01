<template>
  <div class="hello">
    <h1 class="slide-in-left">{{ msg }}</h1>
    <p class="fade-in">We've created this quick retirement calculator to give you idea on what you can do to ensure that you have a long-lasting, worry free retirement! <strong>It's super easy, get started below!</strong></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1{
  font-family: 'Brygada 1918', serif;
  font-size: 4.5rem;
  line-height: .9em;
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
  color: #274c83;
}
p{
  font-size:1.2em;
  padding-top:10px;
}

</style>
