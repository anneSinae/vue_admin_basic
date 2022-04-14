<template>
    <div>
        <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="시작일"
            format="YYYY/MM/DD"
            @change="changeDate('start')"
        ></el-date-picker>
        -
        <el-date-picker
            v-model="endDate"
            type="date"
            placeholder="종료일"
            format="YYYY/MM/DD"
            @change="changeDate('end')"
            ></el-date-picker>
    </div>

    <div>
        <el-date-picker
            v-model="daterange"
            type="daterange"
            format="YYYY/MM/DD"
            start-placeholder="시작일"
            end-placeholder="종료일"
            range-separator="~"
        ></el-date-picker>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DateRange-component',

    data() {
        return {
            startDate: moment().format('YYYYMMDD'),
            endDate: moment().add(+1, 'months').format('YYYYMMDD'),
            daterange: [
                moment(),
                moment().add(+1, 'months').format(),
            ],
        }
    },

    methods: {
        changeDate(type) {
            if (type === 'start') {
                if (this.endDate === null || this.startDate > this.endDate) {
                    this.endDate = this.startDate
                }
                if (moment(this.startDate).isBefore(moment(this.endDate).subtract(1, 'months').format())) {
                    alert('검색 기간은 최대 1개월까지 선택 가능 합니다.')
                    this.startDate = moment(this.endDate).subtract(1, 'months').format()
                }
            } else if (type === 'end') {
                if (this.startDate === null) {
                    this.startDate = this.endDate
                }
                if (moment(this.startDate).format() > moment(this.endDate).format()) {
                    alert('시작일 이후의 날짜를 선택해주세요.')
                    this.endDate = moment().add(+1, 'days').format()
                }
                if (moment(this.endDate).isAfter(moment(this.startDate).add(1, 'months').format())) {
                    alert('검색 기간은 최대 1개월까지 선택 가능 합니다.')
                    this.endDate = moment(this.startDate).add(1, 'months').format()
                }
            }
        }
    }

}
</script>