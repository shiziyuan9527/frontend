<template>
  <div id="app">
    <hello/>
  </div>
</template>

<script>
import { useUserStore } from './stores/main';
import Hello from './components/Hello.vue';

// const userStore = useUserStore();

export default {
  computed: {

  },
  name: 'App',
  components: {
    Hello,
  },
  data() {
    return {
      test: '111'
    }
  },
  created() {

  },
  methods: {
    doClick() {
      // console.log(this.userStore.name);
    },
    doClick1() {
      // console.log(this.userStore.age);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
