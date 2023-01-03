import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { periodData } from '../../data'

const ColumnChart = ({dataColor}) => {
    const options={
              chart: {
                stacked: !0,
                toolbar:{
                    show:1
                },
                zoom:{
                    enabled:!0
                }

              },
              plotOptions: {
                bar: {
                  horizontal: !1,
                  columnWidth:'15%',
                  endingShape:'rounded'
                }
              },
              dataLabels: {
                enabled: true,
              },
              
              xaxis: {
                show:true,
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                  show: true,
                }
              },
              colors: dataColor,
              legend: {
                  position: 'bottom'
              },
              fill:{
                  opacity:1
              }
            
    }
  return (
    <>
        <ReactApexChart options={options} series={periodData} type='bar' height='359' className='apex-charts'/>
    </>
  )
}

export default ColumnChart