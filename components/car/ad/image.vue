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
      @change="({ target }) => getImage(target as EventTarget & HTMLInputElement)"
    />
  </div>
</template>

<script setup lang="ts">
  type ImageFile = {
    preview: string | null
    image: File | null
  }

  const image = ref<ImageFile>({
    preview: null,
    image: null
  })

  const emit = defineEmits(['changeFile'])

  function getImage(target: EventTarget & HTMLInputElement) {
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        image.value.preview = reader.result as string
      }

      image.value.image = file

      reader.readAsDataURL(file)

      emit('changeFile', file)
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
