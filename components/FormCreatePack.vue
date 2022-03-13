<template lang="pug">
#card-form
  h2 Create a pack
  
  form(@submit.prevent='addWord')
    h3 Add Word
    input#newWord(v-model='newWord' type='text' name='word')
    button(type='button') Add

  form(@submit='addPack')
    h3 Words
    label(for='pack-title') Title: 
    input#pack-title(v-model='pack.title' type='text' name='title')

    label Words
      ul
        li(v-for='(word, index) in pack.words')
          span {{ word }}
          button(type='button' @click.prevent='removeWord(index)') Remove
    
    button(type='submit') Create
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { usePacksStore } from '../store/packs'

export default defineComponent({
  setup () {
    const newWord = ref("");
    const pack = ref({
      title: "",
      words: []
    });
    
    const addWord = () => { 
      pack.value.words.push(newWord.value)
      newWord.value = "";
    };

    const removeWord = (index) => pack.value.words.splice(index, 1);

    const packsStore = usePacksStore();

    const addPack = () => {
      packsStore.addPack(pack.value);
    };

    return {
      newWord,
      pack,
      addWord,
      removeWord,
      addPack
    }
  }
})
</script>

<style scoped>

</style>