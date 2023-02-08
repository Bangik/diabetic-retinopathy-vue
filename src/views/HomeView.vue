<template>
  <header>
    <div class="container mt-3">
      <div class="site-heading">
        <h1>Diabetic Retinopathy Detection</h1>
        <span class="subheading">An Artificial Intelligence for detect Diabetic Retinopathy phase</span>
      </div>
    </div>
  </header>

  <main class="container mt-3">
    <div class="row">
      <div class="col-md-12 mt-3">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Upload image for detect</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <img src="@/assets/image/00cc2b75cddd.png" class="img-fluid" alt="Example Image">
              </div>
              <div class="col-md-6">
                <h6 class="card-title">Detection Result:</h6>
                <p class="card-text">Normal</p>
                <h6 class="card-title">Probability:</h6>
                <p class="card-text">0.99</p>
                <hr>
                <form>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Upload Image</label>
                    <input class="form-control" type="file" id="formFile">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>