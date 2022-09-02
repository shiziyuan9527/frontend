<template>
  <el-card shadow="hover">
    {{ person }}
  </el-card>
</template>

<script>
import { useUserStore } from '../stores/main';
import { mapStores } from 'pinia';
import {queryPerson} from '../api'
export default {
  name: 'Hello',
  data() {
    return {
      person: {
        name: '',
        age: ''
      }
    }
  },
  computed: {
    ...mapStores(useUserStore),
  },
  mounted() {
    queryPerson().then(data => {
      this.person = data;
    })
  }

}
</script>