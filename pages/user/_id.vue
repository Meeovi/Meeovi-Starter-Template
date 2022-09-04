<template>
  <div>
      <section>

<!-- Intro -->
<div id="intro" class="bg-image vh-100"
style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/People/full%20page/img%20%2827%29.jpg');">
<div class="mask" style="background-color: rgba(0,0,0,.1);">
  <div class="d-flex justify-content-start align-items-center h-100 mt-4">
    <div class="container">
      <h1 class="display-3 font-weight-bold">John Doe</h1>
      <h4 class="text-uppercase mb-4 pb-2">Architect</h4>
      <p class="lead">Intro subtext</p>
    </div>
  </div>
</div>
</div>
</section>
<!-- Container for demo purpose -->
<div class="container my-5 p-5 shadow-5">

<!--Section: Design Block-->
<section>

<h3 class="text-center">About me</h3>

<p class="text-center font-weight-bold small text-uppercase mb-5">All about my passion</p>

<div class="row">
  <div class="col-lg-5 mb-4 mb-lg-0 pb-2 pb-lg-0 pb-xl-2">
    <img src="https://mdbootstrap.com/img/Others/121.jpg" class="img-fluid shadow-3 rounded"
      alt="Sample image" />
  </div>
  <div class="col-lg-7">
    <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione
      quisquam, dicta ab cupiditate iure eaque? Repellendus voluptatum, magni impedit eaque delectus, beatae
      maxime temporibus maiores quibusdam quasi.Rem magnam ad perferendis iusto sint tempora ea voluptatibus
      iure,
      animi excepturi modi aut possimus in hic molestias repellendus illo ullam odit quia velit. Rem magnam ad
      perferendis iusto sint tempora ea voluptatibus iure, animi excepturi modi aut possimus in hic molestias
      repellendus illo ullam odit quia velit. Qui expedita sit quo, maxime.</p>
    <a class="btn btn-outline-dark">Message Me</a>
  </div>
</div>

</section>
<!--Section: Design Block-->

</div>
      <gallery />
  </div>
</template>

<script>
import gallery from '~/components/user/gallery.vue'

export default {
  components: {gallery},
  head: {
      title: 'User Profile'
  }
}
</script>

<style>

</style>