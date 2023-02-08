<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 nav">
    <div class="container px-4 px-lg-5">
      <RouterLink to="/" class="navbar-brand">Diabetic Retinopathy</RouterLink>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto my-2 my-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">History</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>