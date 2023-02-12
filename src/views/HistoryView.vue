<script setup>
  import ModalFixItemVue from '../components/ModalFixItem.vue';
  import DataTable from 'datatables.net-vue3'
  import DataTablesLib from 'datatables.net-bs5';
  import httpInstance from '../Http.js';
  DataTable.use(DataTablesLib);
  
  const VUE_APP_API_URL= 'http://ec2-108-136-238-151.ap-southeast-3.compute.amazonaws.com'

  const columns = [
    { data: 'id' },
    { data: 'path', render: function (data) {
      return '<img src="' + VUE_APP_API_URL + '/' + data + '" class="retina-img"/>';
    } },
    { data: 'result', render: function (data) {
      return data == 1 ? 'NPDR Mild' : data == 2 ? 'NPDR Moderate' : data == 3 ? 'NPDR Severe' : data == 4 ? 'PDR' : 'Normal';
    } },
    { data: 'probability' },
    { data: 'created', render: function (data) {
      return new Date(data).toLocaleString('id-ID');
    } },
    { data: 'id', render: function (data) {
      return '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal'+data+'">Fix Result</button>';
    } },
  ];
</script>

<script>
  import { ref } from "vue"; 
  let dt;
  const table = ref();
  const VUE_APP_API_URLS = 'http://ec2-108-136-238-151.ap-southeast-3.compute.amazonaws.com'
  export default {
    name: 'HistoryView',
    components: {
      ModalFixItemVue
    },
    data() {
      return {
        datas: [],
      }
    },
    methods: {
      getDatas() {
        httpInstance.get('/history')
          .then((response) => {
            this.datas = response.data.data;
          })
          .catch((error) => {
            alert(error);
          })
      },
      reload() {
        dt.ajax.url(VUE_APP_API_URLS + '/history').load();
      },
      downloadCSV() {
        httpInstance.get('/export-csv')
          .then(() => {
            window.open(VUE_APP_API_URLS + '/export-csv', '_blank');
          })
          .catch((error) => {
            alert(error);
          })
      }
    },
    mounted() {
      this.datas = this.getDatas();
      dt = table.value.dt();
    }
  }
</script>

<template>
  <header>
    <div class="container mt-3">
      <div class="site-heading">
        <h1>Detection History</h1>
        <span class="subheading">You can fix the detection results if the detection results are incorrect to improve accuracy when the model is retrained</span>
      </div>
    </div>
  </header>
  <main>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-12 mt-3">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title float-start">Detection History</h5>
              <button type="button" class="btn btn-primary float-end" @click="downloadCSV">Export CSV</button>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <DataTable :columns="columns" :ajax="VUE_APP_API_URL + '/history'" :options="{order: [[0, 'desc']]}" class="table table-hover" ref="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Image</th>
                          <th>Result</th>
                          <th>Probability</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </DataTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <ModalFixItemVue 
    v-for="data in datas" 
    :key="data.id" 
    :id="data.id"
    :idModal="'modal'+data.id" 
    :result="data.result"
  />
</template>

<style>
  @import 'datatables.net-bs5';
  .retina-img {
    width: 100px;
    height: 100px;
  }
</style>