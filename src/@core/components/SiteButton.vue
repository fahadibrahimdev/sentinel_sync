<script setup>
const props = defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  border: {
    type: Boolean,
    default: false
  }
})

const primaryBtnClasses = `bg-primary text-white ${ props.border ? 'outline outline-3 outline-secondary' : '' }`
const outlineBtnClasses = 'bg-transparent outline outline-2 outline-primary text-white hover:outline-white'
</script>

<template>
  <button
      :class="[ outlined ? outlineBtnClasses : primaryBtnClasses ]"
      class="rounded-4xl font-bold text-sm sm:text-base lg:text-lg 2xl:text-xl px-3 sm:px-5 py-2 lg:px-6 2xl:px-9.5 2xl:py-5"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button.bg-primary:hover{
  box-shadow: 0 3px 9px 1px theme('colors.primary');
  transform: translateY(-3px);
}
</style>