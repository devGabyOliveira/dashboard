import React from 'react'
import arrow from '../assets/angle-down-solid-full.svg'
import export1 from '../assets/arrow-up-from-bracket-solid-full.svg'
import search from '../assets/magnifying-glass-solid-full.svg'
import Top from '../components/Top'
import Chart from '../components/Chart'
import Report from '../components/Report'
import Activity from '../components/Activity'

const Main = () => {
  return (
    <div className='main'>
      <div className='header'>
         <div className='search'>
           <img src={search} alt=''></img>
           <input type='text' className='search-input' placeholder='Search'></input>
         </div>
         <div className='header-actions'>
         <div className='calendar'>
         <p>Last 30 days</p>
         <img src={arrow} alt=''></img>
         </div>
         <div className='export'>
          <img src={export1} alt=''/>
          <p>Export</p>
          </div>
          </div>
         </div>
      <Top></Top>
      <Chart></Chart>
      <Report></Report>
      <Activity></Activity>
    </div>
  )
}

export default Main