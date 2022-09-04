<template>
    <div>
<section class="mb-8">
  
  <div class="custom-height" style="background-color: #efeff2;">
    <div class="container py-5">
      <div class="row my-4">
        <div class="col-12">
          <p class="display-4 fw-bold ls-tight" style="color: #e45300;">Here2Mingle Blog</p>
          <h4 class="mb-0" style="color: #998b89;">Articles from our team</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="container custom-mt">
    <div class="row g-0 align-items-center">
      <div class="col-lg-7 mb-4 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/blog/42.jpg" class="w-100 rounded-6" alt="Italian city" />
      </div>
      <div class="col-lg-5">
        <div class="card cascading-left rounded-6 shadow-5">
          <div class="card-body px-4 p-4 p-md-5 p-lg-4 p-xl-5">
            <h3 class="mb-4">What places to visit during your first trip to Italy? 5 suggestions for backpackers.</h3>
            <p class="text-muted mb-4">Amet consectetur adipisicing elit quam, natus eum repellendus harum dolore dolorum impedit quas blanditiis amet temporibus assumenda iusto. <span class="d-none d-xl-inline">Fugiat voluptatum provident porro tempore corporis minus vero sint occaecat cupidatat.</span></p>
            <button class="btn btn-warning">Read more <i class="fas fa-angle-right ms-1"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Section: Design Block-->
    </div>
</template>

<script>

export default {
    head: {
        title: 'User Profile'
    }
}
</script>

<style>
    .cascading-left {
      margin-left: -50px;
    }
    @media (max-width: 991.98px) {
      .cascading-left {
        margin-left: 0;
      }
    }
    .custom-height {
      height: 500px;
    }
    @media (max-width: 500px) {
      .custom-height {
        height: 650px;
      }
    }
    .custom-mt {
      margin-top: -240px;
    }
    @media (max-width: 500px) {
      .custom-mt {
        margin-top: -420px;
      }
    }
  </style>