<template>
    <div>
      <client-only>
        <Editor />
      </client-only>
    </div>
  </template>
  <script>
  import Editor from '~/components/Editor.vue'
  export default {
    components: {
      Editor
    }
  }
  </script>