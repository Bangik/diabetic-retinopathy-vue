<script>
  import axios from 'axios';
  import HistoryView from '../views/HistoryView.vue';

  export default {
    props: ['id', 'idModal', 'result'],
    methods: {
      async fixResult() {
        const result = document.getElementById('result'+ this.id).value;
        const data = {
          result: result
        }
        await axios.put('http://localhost:5000/history/' + this.id, data)
          .then(() => {
            HistoryView.methods.reload();
          })
          .catch((error) => {
            alert(error);
          })
      }
    }
  }
</script>

<template>
  <div class="modal fade" :id="idModal" tabindex="-1" aria-labelledby="Modal Edit" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="Modal Edit">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="result" class="form-label">Result</label>
            <select class="form-select" aria-label="Default select example" name="result" :id="'result'+id">
              <option value="0" v-bind:selected="result == 0">Normal</option>
              <option value="1" v-bind:selected="result == 1">NPDR Mild</option>
              <option value="2" v-bind:selected="result == 2">NPDR Moderate</option>
              <option value="3" v-bind:selected="result == 3">NPDR Severe</option>
              <option value="4" v-bind:selected="result == 4">PDR</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="fixResult" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>