<template>
    <!-- <div>{{ userStore.name }}</div> -->
</template>

<script>
import { useUserStore } from '../stores/main';
import { mapStores } from 'pinia';
export default {
    name: 'Hello',
    computed: {
        ...mapStores(useUserStore),
    },
}
</script>