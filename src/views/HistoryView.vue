<script setup>
  import ModalFixItemVue from '../components/ModalFixItem.vue';
  import DataTable from 'datatables.net-vue3'
  import DataTablesLib from 'datatables.net-bs5';
  DataTable.use(DataTablesLib);

  const columns = [
    { data: 'id' },
    { data: 'image', render: function (data) {
      return '<img src="' + data + '" width="100px" height="100px" />';
    } },
    { data: 'result' },
    { data: 'probability' },
    { data: 'actual'},
    { data: 'date' },
    { data: 'action', render: function (data) {
      // return '<button type="button" class="btn btn-primary" @click="showModal('+data+')">Fix Result</button>';
      // return modalFixItemVue;
      return '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal'+data+'">Fix Result</button>';
    } },
  ];
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
              <h5 class="card-title">Detection History</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <DataTable :columns="columns" ajax="/data.json" :options="{order: [[0, 'desc']]}" class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Image</th>
                          <th>Result</th>
                          <th>Probability</th>
                          <th>Actual</th>
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

  <ModalFixItemVue id="modal1" />
</template>

<style>
  @import 'datatables.net-bs5';
  .retina-img {
    width: 100px;
    height: 100px;
  }
</style>