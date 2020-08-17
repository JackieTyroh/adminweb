<script src="./charts.js"></script>
<style lang="css" src="./index.css"></style>
<template>
<div class="container-fluid">
<div class="row">
  <div class="col-md-2"> <Menu/></div>
<div class="col-md-10">
           <div class="contents">
        <div class="col">
          <div class="contents1">
            <div class="row">
              <b-card title="Current Statistics" sub-title="24 Hours performance" style="border:none">
            <b-card-body>
              <mdb-bar-chart
                    :data="barChartData"
                    :options="barChartOptions"
                    :width="500"
              ></mdb-bar-chart>
            </b-card-body>
            <b-card-footer class="row" >
            <b-icon-clock-history></b-icon-clock-history>
            <p>Updated 3 minutes ago</p>
            </b-card-footer>
          </b-card>
           <b-card title="Current Statistics" sub-title="24 Hours performance" style="border:none">
            <b-card-body >
              <mdb-pie-chart
                    :data="pieChartData"
                    :options="pieChartOptions"
                    :width="400"
              ></mdb-pie-chart>
            </b-card-body>
            <b-card-footer class="row" >
            <b-icon-clock-history></b-icon-clock-history>
            <p>Updated 3 minutes ago</p>
            </b-card-footer>
          </b-card>
            </div>
          </div>
          <div class="contents2">
          <div class="row">
            <b-card title="Current Statistics" sub-title="24 Hours performance" style="border:none">
            <b-card-body>
                <mdb-radar-chart
                  :data="radarChartData"
                  :options="radarChartOptions"
                  :width="450"
                ></mdb-radar-chart>
            </b-card-body>
            <b-card-footer class="row" >
            <b-icon-clock-history></b-icon-clock-history>
            <p>Updated 3 minutes ago</p>
            </b-card-footer>
          </b-card>
          <b-card title="Current Statistics" sub-title="24 Hours performance" style="border:none">
            <b-card-body>
                  <mdb-line-chart
                      :data="lineChartData"
                      :options="lineChartOptions"
                      :width="450"
                  ></mdb-line-chart> 
            </b-card-body>
            <b-card-footer class="row" >
            <b-icon-clock-history></b-icon-clock-history>
            <p>Updated 3 minutes ago</p>
            </b-card-footer>
          </b-card>
          </div>
          
          </div>
          
        </div> 
      
      </div> 
</div>
    

</div>  
</div>
</template>