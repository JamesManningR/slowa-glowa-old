<template>
<div id="card-form">
  <h2>Create a pack</h2>

  <form @submit.prevent="addWord">
    <h3>Add Word</h3>
    <input v-model="newWord" type="text" name="word" id="newWord">
    <button type="button">Add</button>
  </form>

  <form>
    <h3>Words</h3>
    <ul>
      <li v-for="(word, index) in words">
        <span>{{ word }}</span>
        <button type="button" @click.prevent="removeWord(index)">Remove</button>
      </li>
    </ul>

    <button type="submit">Create</button>
  </form>
</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const newWord = ref("");
    const words = ref([]);
    
    const addWord = () => { 
      words.value.push(newWord.value)
      newWord.value = "";
    };

    const removeWord = (index) => words.value.splice(index, 1);

    return {
      newWord,
      words,
      addWord,
      removeWord
    }
  }
})
</script>

<style scoped>

</style>