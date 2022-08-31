import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'jack',
        age: 18
    }),
    actions: {
        change(newName) {
            this.name = newName
        }
    }
})

// export default useUserStore