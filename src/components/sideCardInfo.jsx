import React, { PureComponent } from 'react'
import bitcoin from '../images/bitcoin.png'
import ethereum from '../images/ethereum.png'
import tether from '../images/tether.png'

export default class SideCardInfo extends PureComponent {
  render() {
    const options = { maximumFractionDigits: 2 }
    return (
      <div className='allCardInfo'>
        <div className='moreInfo' style={{ color: 'black' }}>
          <div className='cardMoreInfo'>
            <h6>Market Cap</h6>
            <p> {this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.mcap)}</p>
          </div>
          <div className='cardMoreInfo'>
            <h6>Price Change in 24Hrs</h6>
            <p>{this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.priceChange24)}</p>
          </div>
          <div className="cardMoreInfo">
            <h6>Total Volume</h6>
            <p> {this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.totalVol)}</p>
          </div>
          <div className="cardMoreInfo">
            <h6>Circulating Supply</h6>
            <p >{Intl.NumberFormat("en-US", options).format(this.props.circularSupply)}</p>
          </div>
        </div>
        <div className='rank '>
          <h5>Top crypto Currency</h5>
        <div className='cardMoreInfo'>
        <h6>
          1. BitCoin
          <img src={bitcoin} alt=""  width='20px'/>
           BTC</h6>
            <p> Market cap: $894.8 B</p>
          </div>
          <div className='cardMoreInfo'>
            <h6>
              2. Ethereum 
              <img src={ethereum} alt=""  width='15px'/>
              (ETH)</h6>
            <p>Market cap: $287.6 B</p>
          </div>
          <div className="cardMoreInfo">
            <h6>
              3.Binance Coin <img src={tether} alt=""  width='15px' marginBottom='0'/>  (BNB)</h6>
            <p> Market cap: $48.2 B</p>
          </div>
        </div>
      </div>
    )
  }
}
