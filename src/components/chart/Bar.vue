<template>
    <div class="chartbox">
        <Bar
            :chart-options="barChartSetting.chartOptions"
            :chart-data="barChartSetting.chartData"
            :chart-id="barChartSetting.chartId"
            :width="barChartSetting.width"
            :height="barChartSetting.height"
            :dataset-id-key="datasetIdKey"
        />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'Bar-chart',
    components: { Bar },

    props: {
        barChartSetting: {},
        datasetIdKey: {
            type: String,
            default: 'label'
        },
    },

    mounted() {
        console.log(this.barChartSetting.chartData, "sinae");
    }
    
};
</script>