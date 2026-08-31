import React from 'react'
import activity from '../newAssets/vital_signs_22dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'
import filter from '../newAssets/filter_list_22dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import sort from '../assets/left-right-solid-full.svg'
import card from '../newAssets/credit_card_22dp_22A66F_FILL0_wght400_GRAD0_opsz24.svg'
import up from '../assets/north_16dp_22A66F_FILL0_wght400_GRAD0_opsz20.svg'
import north from '../assets/north_16dp_1F1F1F_FILL0_wght400_GRAD0_opsz20.svg'

const Activity = () => {
  return (
    <div className='wrapper-7'>
      <div className='wrapper-8'>
        <div className='activity'>
          <div style={{display: 'flex', gap: '10px'}}>
            <img style={{width: '20px', height: '20px'}} src={activity} alt=''></img>
            <h4>Recent Activity</h4>
          </div>
          <div style={{display: 'flex', gap:'20px'}}>
            <button>
            <img src={filter}  alt=''></img>
            Filter
            </button>
            <button>
              <img className='sort' src={sort} alt=''></img>
              Sort
            </button>
            <button style={{width: '30px', marginRight: '10px'}}>...</button>
          </div>
        </div>
  
        <div className='table-head'>
         <div>
          <p>TYPE</p>
         </div>
         <div>
          <p>AMMOUNT</p>
          <p>STATUS</p>
          <p>METHOD</p>
         </div>
        </div>
        <div className='table-body'>
            <div style={{display: 'flex', gap: '20px'}}>
            <div style={{alignContent:'center'}}>
              <button style={{backgroundColor: '#c4e9b8', color: "#25522b", width: '30px', marginLeft: '5px'}}>+</button>
            </div>
            <div style={{display: 'block'}}>
              <div>
                <h4>Theo Laurence</h4>
              </div>
              <div style={{color: '#bbc2bc', fontSize: 'small'}}>
                Add - Oct 18, 2024
              </div>
            </div>
            </div>
          <div>
            <div style={{marginRight: '20px'}}>
              <h4>€ 500,00</h4>
              <p style={{color:"#bbc2bc", fontSize: 'small'}}>120 USD</p>
            </div>
            <div style={{backgroundColor: "rgba(31, 112, 36, 0.2)", height: '20px', borderRadius: '5px'}}>
              <h4 style={{ color: "#315436",borderRadius: '3px', textAlign: 'center', width: '60px'}}>Sucess</h4>
            </div>
            <div style={{display:'block', marginRight: '5px'}}>
              <h4>Credit Card</h4>
              <p style={{color: '#bbc2bc', fontSize: 'small'}}>**** 3560</p>
            </div>
          </div>
          
          </div>
        <div className='table-body-2'>
           <div style={{display: 'flex', gap: '20px'}}>
            <div style={{alignContent:'center'}}>
              <button style={{backgroundColor: '#c4e9b8', color: "#25522b", width: '30px', marginLeft: '5px'}}>
                <img style={{height: '12px'}} src={up} alt=''></img>
              </button>
            </div>
            <div style={{display: 'block'}}>
              <div>
                <h4>Amy March</h4>
              </div>
              <div style={{color: '#bbc2bc', fontSize: 'small'}}>
                Sent - May 24, 2024
              </div>
            </div>
            </div>
              <div>
            <div style={{marginRight: '20px'}}>
              <h4>-€ 250,00</h4>
              <p style={{color:"#bbc2bc", fontSize: 'small'}}>80 USD</p>
            </div>
            <div style={{backgroundColor: "rgba(173, 174, 173, 0.2)", height: '20px', borderRadius: '5px'}}>
              <h4 style={{ color: "#444844",borderRadius: '3px', textAlign: 'center', marginRight: '-20px', width: '62px'}}>Pending</h4>
            </div>
            <div style={{display:'block', marginRight: '5px'}}>
              <h4>Bank Transfer</h4>
              <p style={{color: '#bbc2bc', fontSize: 'small'}}>**** 2286</p>
            </div>
            </div>
        </div>
      </div>
      <div className='card'>
      <div>
        <div style={{display: 'flex', gap: '8px', marginLeft: '5px'}}>
        <img src={card} alt=''></img>
        <h4>My Cards</h4>
        </div>
        <div>
          <button style={{marginRight:'5px'}}>
            <p>See All</p>
            <img style={{transform: 'rotate(45deg)', height: '14px'}} src={north} alt=''></img></button>
        </div>
      </div>
        <div style={{marginTop: '30px'}}>
         <div className='main-card'>
          <div> 
            <h4>VISA</h4>
            <p>**** **** **** 2305</p>
            </div>
          <div>
          <h2 style={{marginRight: '150px', marginBottom: '10px'}}>€ 4.540,20</h2>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Activity