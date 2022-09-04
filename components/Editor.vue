<template>
  <div id="app" class="editor">
    <form >
    <editor
      api-key="zsmyw9sudq9kejtndaxtq1fewjgn0mojynbnrof2w0cf9pbk"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }"
    />
    <br>
    <button class="btn btn-primary" id="postSubmit">Post</button>
  </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'app',
  components: {
    'editor': Editor
  }
}
</script>
