import React from 'react'
import business from '../newAssets/account_balance_22dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'
import arrow from '../assets/north_16dp_22A66F_FILL0_wght400_GRAD0_opsz20.svg'
import saving from '../newAssets/approval_delegation_22dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'
import decline from '../newAssets/north_22dp_D13F3F_FILL0_wght400_GRAD0_opsz24.svg'
import chart from '../newAssets/chart_data_22dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'

const Report = () => {
  return (
    <div className='report'>
        <div className='wrapper-6'>
           <div>
            <img src={business} alt=''></img>
            <h4>Business Account</h4>
            <p>Last 30 days</p>
          </div>
           <div>
           <h2>€ 8.672,20</h2>
           <span className='percentage'>16,0% <img src={arrow} alt=''></img></span>
          </div>
           <div>
           <p>vs.7.120,14 Last Period</p>
          </div>
        </div>
         <div>
           <div className='wrapper-6'>
           
           <div>
            <img src={saving} alt=''></img>
            <h4 style={{paddingTop:'3px'}}>Total Saving</h4>
            <p style={{marginLeft: '120px'}}>Last 30 days</p>
          </div>
           <div>
           <h2>€ 3.765,35</h2>
           <span className='percentage decline'>8,2% <img src={decline} alt=''></img></span>
          </div>
           <div>
           <p>vs.4.116,50 Last Period</p>
            </div>
          </div>
        </div>
         <div>
          <div className='wrapper-6'>
           <div>
            <img src={chart} alt=''></img>
            <h4>Tax Reserve</h4>
            <p style={{marginLeft: '120px'}}>Last 30 days</p>
          </div>
           <div>
           <h2>€ 14.376,16</h2>
           <span className='percentage'>35,2% <img src={arrow} alt=''></img></span>
          </div>
           <div>
           <p>vs.10.232,46 Last Period</p>
          </div>
         </div>
         </div>
   </div>
  )}

export default Report