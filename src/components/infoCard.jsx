import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class InfoCard extends Component {
  constructor() {
    super();
  
  }
  render() {
    // console.log('Info Card')
    const options = { maximumFractionDigits: 2 }
    return (
      <div className='coin-card'>
        <h1 className='coinName'>{this.props.coinName}</h1>
        <section className='card-section'>
          <div className='card'>
            <h6>Market Cap 24Hrs</h6>
            <p>{Intl.NumberFormat("en-US", options).format(this.props.mCap24)} %</p>
          </div>
          <div className='card'>
            <h6>All time High</h6>
            <p> {this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.ath)}</p>
          </div>
          <div className='card'>
            <h6>All time Low</h6>
            <p> {this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.atl)}</p>
          </div>
          <div className='card'>
            <h6>Positive Sentiments</h6>
            <p>{this.props.sentiment}%</p>
          </div>
          <div className="card">
            <h6>High 24Hrs</h6>
            <p style={{ color: 'green' }}> {this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.high24)}</p>
          </div>
          <div className="card">
            <h6>Low 24Hrs</h6>
            <p style={{ color: 'red' }}>{this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.low24)}</p>
          </div>
        </section>
        <div className="priceChart">
          {/* <Chart
            options={this.state.options1}
            width='300'
          /> */}

          <div className='currentPrice'>
            <h2>Current Price</h2>
            <p>{this.props.currency === 'usd' ? '$' : '₹'}{Intl.NumberFormat("en-US", options).format(this.props.currentPrice)}</p>
          </div>

        </div>

      </div>
    )
  }
}
