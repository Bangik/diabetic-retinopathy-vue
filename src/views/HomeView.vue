<script>
  // import axios from 'axios';
  import httpInstance from '../Http.js';

  export default {
    name: 'HomeView',
    data() {
      return {
        imageFile: null,
        image: '',
        result: '',
        probability: '',
      }
    },
    methods: {
      getLastData() {
        httpInstance.get('/last')
          .then((response) => {
            this.image = 'http://localhost:5000/'+response.data.data.path;
            this.result = response.data.data.result;
            this.probability = response.data.data.probability;
          })
          .catch(() => {
            this.image = 'src/assets/image/00cc2b75cddd.png';
            this.result = 'Normal';
            this.probability = '0.99';
          })
      },
      uploadImage(e) {
        this.imageFile = e.target.files[0];
      },
      SubmitData() {
        let formData = new FormData(document.getElementById('formUpload'));
        formData.append('file', this.imageFile);
        httpInstance.post('/upload', formData)
          .then((response) => {
            this.image = response.data.url_image;
            this.result = response.data.prediction;
            this.probability = response.data.probability;
          })
          .catch((error) => {
            alert(error);
          })
      }
    },
    mounted() {
      this.getLastData();
    }
  }
</script>

<template>
  <header>
    <div class="container mt-3">
      <div class="site-heading">
        <h1>Diabetic Retinopathy Detection</h1>
        <span class="subheading">An Artificial Intelligence for detect Diabetic Retinopathy stage</span>
        <br>
        <span class="subheading">How to use:</span>
        <br>
        <span class="subheading">1. Upload image for detect; 2. Wait for the result; 3. See the result; 4. Fix the result if incorrect</span>
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
                <img :src="image" class="img-fluid" alt="Example Image">
              </div>
              <div class="col-md-6">
                <h6 class="card-title">Detection Result:</h6>
                <p class="card-text">{{ result == 1 ? 'NPDR Mild' : result == 2 ? 'NPDR Moderate' : result == 3 ? 'NPDR Severe' : result == 4 ? 'PDR' : 'Normal' }}</p>
                <h6 class="card-title">Probability:</h6>
                <p class="card-text">{{ probability }}</p>
                <hr>
                <form @submit.prevent="SubmitData" id="formUpload">
                  <div class="mb-3">
                    <label for="file" class="form-label">Upload Image</label>
                    <input class="form-control" type="file" id="file" name="file" @change="uploadImage">
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