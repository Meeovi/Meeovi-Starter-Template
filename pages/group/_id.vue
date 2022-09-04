<template>
    <div>
      <div class="container my-5">
  
        <!--Section: Design Block-->
        <section class="mb-10">
  
          <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
            style="border-bottom: 2px solid #f5f5f5 !important;">
            <h2 class="fw-bold mb-0">Post to this Group</h2>
            <h6 class="mb-0"><a href="/members">See All Members <i class="fas fa-angle-right fa-xs ms-1"></i></a></h6>
          </div>
          <div class="row gx-lg-5">
            <div class="col-lg-8">
              <feedPost />
              <div class="mb-5">
                <div class="bg-image hover-overlay hover-zoom ripple rounded-6 mb-4" data-mdb-ripple-color="light">
                  <img class="w-100" src="https://mdbootstrap.com/img/new/blog/1.jpeg"
                    style="max-height: 475px; object-fit: cover;" alt="Image placeholder">
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
                  </a>
                </div>
                <h6 class="text-muted text-uppercase small pb-1"><a href="#!" class="text-reset">Web Design</a></h6>
                <h4 class="fw-bold mb-3"><a href="#!" class="text-reset">Weekly design inspiration</a></h4>
                <p class="text-truncate"
                  style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <!-- Container for demo purpose -->
              <div class="container my-5 py-5 shadow-5">
  
                <!--Section: Design Block-->
                <section class="text-center">
  
                  <h3 class="mb-5">Latest Members</h3>
                  <div class="row">
                    <div class="col mb-md-0 mb-4">
                      <img class="rounded shadow-1-strong mb-4"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="avatar"
                        style="width: 150px;" />
                      <h5 class="mb-3">Maria Kate</h5>
                      <p>CRIMINAL LAWYER</p>
                      <ul class="list-unstyled mb-0">
                        <a href="#!" class="px-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </ul>
                    </div>
                    <div class="col mb-md-0 mb-4">
                      <img class="rounded shadow-1-strong mb-4"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(12).jpg" alt="avatar"
                        style="width: 150px;" />
                      <h5 class="mb-3">Sarah Melyah</h5>
                      <p>BANK & FINANCIAL LAWYER</p>
                      <ul class="list-unstyled mb-0">
                        <a href="#!" class="px-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </ul>
                    </div>
                    <div class="col mb-0">
                      <img class="rounded shadow-1-strong mb-4"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="avatar"
                        style="width: 150px;" />
                      <h5 class="mb-3">John Doe</h5>
                      <p>FAMILY LAWYER</p>
                      <ul class="list-unstyled mb-0">
                        <a href="#!" class="px-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </ul>
                    </div>
                    <div class="col mb-0">
                      <img class="rounded shadow-1-strong mb-4"
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-11.jpg" alt="avatar"
                        style="width: 150px;" />
                      <h5 class="mb-3">Anna Smith</h5>
                      <p>BUSINESS LAWYER</p>
                      <ul class="list-unstyled mb-0">
                        <a href="#!" class="px-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#!" class="px-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </ul>
                    </div>
                  </div>
  
                </section>
                <!--Section: Design Block-->
  
              </div>
              <!-- Container for demo purpose -->
            </div>
          </div>
  
        </section>
        <!--Section: Design Block-->
  
      </div>
    </div>
  </template>
  
  <script>
  import feedPost from '~/components/social/feedPost'
  
    export default {
      components: {feedPost},
      head: {
        title: 'Individual Group'
      }
    }
  
  </script>
  
  <style>
  
  </style>
  