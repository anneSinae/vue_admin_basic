<template>
    <h3>통계관리</h3>
    <BarChart :barChartSetting="barChartSetting" />
</template>

<script>
import BarChart from '../components/chart/Bar.vue'

export default {
  name: 'Statistics-page',
  components: { BarChart },

  data() {
    return {
      barChartSetting: { 
        chartData: {
          labels: ['January', 'February', 'March'],
          datasets: [{
            label: 'Dataset 1',
            data: [40, 20, 12],
            backgroundColor: '#41b783'
          },
          {
            label: 'Dataset 1',
            data: [50, 30, 22],
            backgroundColor: '#35495e'
          }]
        },
        chartOptions: {
          responsive: true,
          animation: {
            delay: (context) => {
              let delay = 0;
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
              return delay;
            }
          }
        },
        chartId: 'bar-chart1',
        width: 300, // not working in responsive:true
        height: 200, // not working in responsive:true
      }
    }
  }
}
</script>