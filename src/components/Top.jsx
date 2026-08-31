import React from 'react'
import arrowUp from '../assets/north_16dp_22A66F_FILL0_wght400_GRAD0_opsz20.svg'
import arrowup from '../newAssets/north_22dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import request from '../assets/cached_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg'

const Top = () => {
  return (
    <div style={{background: '#064f53', padding: "14px", paddingTop: '30px', marginRight: '10px', borderRadius: "10px", width: '1270px', height: '100px',}}>
    <h2 className='title'>Total Balance</h2>
    <div className='wrapper-4'>
        <div className='sub-wrapper'>
            <h2>€ 320.845,20</h2>
            <div>
            <span>15, 8%</span>
            <img  src={arrowUp} alt='' style={{ color: "#22a66f"}}></img>
            </div>
        </div>
        <div className='sub-wrapper2'>
        <button style={{backgroundColor: "#22a66f"}}>+ Add</button>
        <button> 
        <img style={{height: '12px'}} src={arrowup} alt=''></img>
        <span>Send</span>
        </button>
        <button className='request'>
            <img src={request} alt=''></img>
            <span>Request</span>
        </button>
        <button>...</button>
        </div>
    </div>
    </div>
  )
}

export default Top