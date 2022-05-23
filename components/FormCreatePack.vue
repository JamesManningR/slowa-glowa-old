
<script lang="ts" setup>
import { ref } from "vue"
import { usePacksStore } from "../store/packs"

const newWord = ref("");
const pack = ref({
  name: "",
  words: [] as string[],
  language: "en",
  color: "#232323"
});

const letterColor = ref("#232323");

const randomizeColorOnInput = ref(false);
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
</script>

<template lang="pug">
.card-form
  h2.h2 Create a pack

  section.card-form__section.card-form__options
    .card-form__option
      AppCheckbox#randomizeColor(
        v-model="randomizeColorOnInput"
        name="randomizeColor"
      ) Randomize color

  form.card-form__meta(@submit.prevent="addPack()")
    section.card-form__section
      h3.h3 Meta

      label(for="pack-title") Title: 
      AppInput#pack-title(
        v-model="pack.name"
        @keydown="randomizeColorOnInput && randomizeColor()"
        type="text"
        name="title"
      )

    section.card-form__section
      h3.h3 Words

      AppInputSubmit.card-form__add-words(
        @submit="addWord()"
        v-model="newWord"
        name="word"
        id="newWord"
      ) Add Word
        template( v-slot:btn ) Add

      ul.card-form__words
        li.card-form__word(v-for="(word, index) in pack.words")
          span {{ word }}
          AppButton(type="button" @click.prevent="removeWord(index)") Remove

    AppButton.card-form__submit(type="submit") Create
  
  .preview
    PackCard(:pack="pack")

</template>

<style lang="scss">
@use "@scss/variables";

.card-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  padding: 1em;

  h2, .submit {
    flex-basis: 100%;
  }

  &__section {
    margin-bottom: 1em;
  }

  &__add-words {
    margin-bottom: .25em;
  }

  &__words {
    border: variables.$border-width solid black;
    max-width: max-content;
    display: flex;
    flex-direction: column;
    padding: .25em;
  }

  &__word {
    display: flex;
    justify-content: space-between;
    margin-bottom: .2em;
    gap: 1em;
  }

  .preview {
    .pack-card {
      height: 100%;
      width: 100%;
    }
  }
}
</style>