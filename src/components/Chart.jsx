import React from 'react'
import arrows from '../assets/sync_alt_24dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'
import settings from '../assets/gear-solid-full.svg'
import arrowdown from '../assets/north_16dp_22A66F_FILL0_wght400_GRAD0_opsz20.svg'
import arrowdown1 from '../newAssets/north_22dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import arrowdown2 from '../newAssets/north_22dp_D13F3F_FILL0_wght400_GRAD0_opsz24.svg'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LinearScale, BarElement} from 'chart.js'

ChartJS.register(LinearScale, BarElement)

const arrCash = [
   {day: 18, cash: 5200},
   {day: 21, cash: 2344},
   {day: 24, cash: 2560},
   {day: 27, cash: 4345},
   {day: 30, cash: 3569},
   {day: 1, cash: 1998},
   {day: 5, cash: 3100},
   {day: 8, cash: 3758},
   {day: 11, cash: 2356},
   {day: 14, cash: 2678},
   {day: 18, cash: 5043}
]
const data = {
      datasets: [
    {
      label: 'Cash Flow',
      data: arrCash,
      backgroundColor: '#064f53',
      parsing: {
         xAxisKey: 'day',
         yAxisKey: 'cash'
      }
   }
]
}

const chartOptions = {
   scales: {
      x: {
         type: 'linear',
         position: "bottom"
      },
      y: {
         beginAtZero: true,
      }
   }
}
const Chart = () => {
  return (
    <div className='wrapper-5'> 
        <div className='sub-header'>
         <div>
            <img src={arrows} alt='' className='double-arrows'></img>
            <p>Cash Flow</p>
         </div>
         <div>
         <div className='week-day'>
            <span>Weekly</span>
            <span style={{color: '#eaecef'}}>|</span>
            <span className='daily'>Daily</span>
         </div>
            <div className='settings'>
            <img src={settings} alt=''></img>
            <span>Manage</span>
            </div>
         </div>
        </div>
      <div className='chart'>
      <div style={{width:'800px', height: '300px'}}>
      <Bar data={data} options={chartOptions} />
      </div>
      <div>
      <div className='income'>
      
         <div className='income-img'>
            <img src={arrowdown1} alt=''></img>
         </div>
         <div>
            <h4>Income</h4>
            <div style={{display: 'flex'}}>
             <h2>€ 12.378,20</h2>
             <p style={{fontSize: 'small', color:'#22a66f', marginTop: '8px', marginLeft: '5px'}}>45,0%</p> 
             <img style={{transform: 'rotate(45deg)', height: '12px', marginTop:'8px', marginLeft: '2px'}} src={arrowdown} alt=''></img>
             </div>
        
       </div>
      </div>
   
      <div className='expense'>
      
         <div className='expense-img'>
            <img src={arrowdown1} alt=''></img>
         </div>
         <div>
            <h4>Expense</h4>
            <div style={{display: 'flex'}}>
             <h2>€ 5.788,21</h2>
             <p style={{fontSize: 'small', color:'#a63a22', marginTop: '8px', marginLeft: '5px'}}>12,5%</p> 
             <img style={{transform: 'rotate(135deg)', height: '12px', marginTop:'8px', marginLeft: '2px'}} src={arrowdown2} alt=''></img>
             </div>
        
       </div>
       </div>
       </div>
      </div>
    <div>
      <div>
      
      </div>
    </div>

    </div>
  )
}

export default Chart