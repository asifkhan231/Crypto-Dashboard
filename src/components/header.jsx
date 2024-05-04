import React, { Component } from 'react'
import home from '../images/home.png'
import setting from '../images/setting.png'
import ring from "../images/ring.png" 
import user from "../images/user.png"

export default class Header extends Component {
  style={
    padding : '5px 20px',
    marginRight :' 10px'
  }
  render() {
    return (
      <div className='navBar'>
        <h2 className='heading'>CRYPTO ANALYSIS</h2>
        <select name="SelectCoin" className='coin--Select' style={{width:'fit-content'}} onChange={this.props.handleChange}>
            <option value="bitcoin">Select Coin</option>
            <option value="bitcoin">BitCoin (BTC)</option>
            <option value="avalanche-2">Avalanche (AVAX)</option>
            <option value="binancecoin">Binance (BNB)</option>
            <option value="cardano">Cardano (ADA)</option>
            <option value="decentraland">Decentraland (MANA)</option>
            <option value="dogecoin">Dogecoin (DOGE)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="ripple">Ripple (XRP)</option>
            <option value="solana">Solana (SOL)</option>
            <option value="tether">Tether (USDT)</option>
        </select>
        <div className='icons' >
          <select name="selectCurrency" id="selectCurrency" className='coin--Select' style={this.style} onChange={this.props.handleChangeCurrency}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          </select>
            <img src={home} alt="" />
            <img src={setting} alt="" />
            <img src= {ring}alt="" />
            <img src={user} alt="" />
        </div>
      </div>
    )
  }
}
