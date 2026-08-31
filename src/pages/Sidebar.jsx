import React from 'react'
import logo from '../assets/globe-solid-full (3).svg'
import logout from '../assets/arrow-right-to-bracket-solid-full.svg'
import dashboard from '../assets/gauge-simple-high-solid-full.svg'
import payment from '../assets/left-right-solid-full.svg'
import transaction from '../assets/cash-register-solid-full.svg'
import card from '../assets/credit-card-regular-full.svg'
import down from '../assets/angle-down-solid-full.svg'
import capital from '../assets/landmark-flag-solid-full.svg'
import vault from '../assets/vault-solid-full.svg'
import report from '../assets/file-solid-full.svg'
import earn from '../assets/gift-solid-full.svg'
import settings from '../assets/gear-solid-full.svg'
import help from '../assets/circle-question-regular-full.svg'
import pro from '../assets/spinner-solid-full.svg'
import avatar from '../assets/circle-user-solid-full.svg'

  const Sidebar = () => (
  <aside className="sidebar">

    {/* TOPO */}
    <div className="top">
      <div className="sub-top">
        <img className="img" src={logo} alt="logo" />
        <h2 className="logo">Sequence</h2>
      </div>

      <img src={logout} alt="logout" className="logout" />
    </div>

    {/* MENUS */}
    <div className="wrapper2">

      <div>
        <h4>GENERAL</h4>

        <div style={{backgroundColor: "white"}} className="links">
          <img src={dashboard} alt="" />
          <a href="#">Dashboard</a>
        </div>

        <div className="links">
          <img src={payment} alt="" />
          <a href="#">Payment</a>
        </div>

        <div className="links">
          <img src={transaction} alt="" />
          <a href="#">Transaction</a>
        </div>

        <div className="links">
          <img src={card} alt="" />
          <a href="#">Cards</a>
          <img src={down} alt="" />
        </div>
      </div>

      <div className="links-wrapper">
        <h4>SUPPORT</h4>

        <div className="links">
          <img src={capital} alt="" />
          <a href="#">Capital</a>
        </div>

        <div className="links">
          <img src={vault} alt="" />
          <a href="#">Vault</a>
        </div>

        <div className="links">
          <img src={report} alt="" />
          <a href="#">Reports</a>
        </div>

        <div className="links">
          <img src={earn} alt="" />
          <a href="#">Earn</a>
          <p style={{backgroundColor: "#cef4e3"}}>€ 150</p>
        </div>
      </div>

      {/* PARTE INFERIOR */}
      <div className="links-wrapper-3">

        <div className="links">
          <img src={settings} alt="" />
          <a href="#">Settings</a>
        </div>

        <div className="links">
          <img src={help} alt="" />
          <a href="#">Help</a>
        </div>

        <div className="links">
          <img src={pro} alt="" />
          <a href="#">Pro Mode</a>
        </div>

        <div className="user">
          <img src={avatar} alt="avatar" className="avatar" />

          <div>
            <p>Young Alaska</p>
            <p>alaskka@gmail.com</p>
          </div>
        </div>

        <footer>
          <p>&copy; 2026 Gabriele Oliveira</p>
        </footer>

      </div>
    </div>

  </aside>
)


    export default Sidebar