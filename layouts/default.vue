<template>
  <div>
    <Header />
    <main class="mb-5" style="margin-top: -35px;">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
    components: {
      Header,
      Footer
    }
}
</script>
