<template>
  <div class="image">
    <label for="image">Image *</label>
    <div class="image__preview" v-if="image.preview">
      <img :src="image.preview" alt="Image Preview">
    </div>
    <input
      type="file"
      name="image"
      id="image"
      accept="image/png, image/jpeg"
      @change="({ target }) => getImage(target)"
    />
  </div>
</template>

<script setup lang="ts">
  const image = ref({
    preview: null,
    image: null
  })

  const emit = defineEmits(['changeFile'])

  function getImage(target) {
    if (target.files) {
      const reader = new FileReader()
      reader.onload = ({ target }) => {
        image.value.preview = target.result
      }
      image.value.image = target.files[0]
      reader.readAsDataURL(target.files[0])
      emit('changeFile', target.files[0])
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-family: sans-serif;
    }

    &__preview {
      img {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
</style>
