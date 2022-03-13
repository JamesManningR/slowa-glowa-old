<template lang="pug">
#card-form
  h2 Create a pack

  .forms 
    form(@submit.prevent='addWord()')
      h3 Add Word
      input#newWord(v-model='newWord' type='text' name='word')
      button(type='button') Add

    form(@submit='addPack()')
      h3 Words
      label(for='pack-title') Title: 
      input#pack-title(
        v-model='pack.name'
        @keydown="randomizeColor()"
        type='text'
        name='title'
      )

      label Words
        ul
          li(v-for='(word, index) in pack.words')
            span {{ word }}
            button(type='button' @click.prevent='removeWord(index)') Remove

  .preview
    PackCard(:pack='pack')

  button.submit(type='submit') Create
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { usePacksStore } from '../store/packs'

export default defineComponent({
  setup() {
    const newWord = ref("");
    const pack = ref({
      name: "",
      words: [] as string[],
      language: "en",
      color: "#232323"
    });

    const letterColor = ref("#232323");

    const randomizeColor = () => {
      // Generate random color
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      pack.value.color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }

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
      addPack,
      randomizeColor,
      letterColor
    }
  }
})
</script>

<style lang="scss">
#card-form {
  display: flex;
  flex-wrap: wrap;

  h2, .submit {
    flex-basis: 100%;
  }

  > * {
    flex-basis: 50%;
  }

  .preview {
    .pack-card {
      height: 100%;
      width: 100%;
    }
  }
}
</style>