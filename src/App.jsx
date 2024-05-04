import React, { PureComponent } from 'react'
import "./App.css"
import InfoCard from './components/infoCard';
import Header from './components/header';
import ChartComp from './components/chartComp';
import SideCardInfo from './components/sideCardInfo';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      id: 'bitcoin',
      currency: 'usd',
      data: {}
    }
  }

  fetchData = async () => {
    let data = await fetch('https://api.coingecko.com/api/v3/coins/' + this.state.id)
    let jsonData = await data.json()
    this.setState({ id: this.state.id, currency:this.state.currency,data: jsonData })
    console.log(jsonData)
  }
  handleChange = async (event) => {
   await  this.setState({ id: event.target.value, currency:this.state.currency ,data: this.state.data })

    this.fetchData();
  }
 handleChangeCurrency =  async(event) => {
 await   this.setState({id:this.state.id , currency:event.target.value, data:this.state.data})
    this.fetchData();
  }
 
  componentDidMount() {
    this.fetchData()
    // this.interval = setInterval(() => this.fetchData(), 2000);
  }

  // componentWillUnmount() {
  //  clearInterval(this.interval)
  // }
 
  render() {
    return (
      <div>
        <Header handleChange={this.handleChange} handleChangeCurrency={this.handleChangeCurrency} />
        <div className='content'>
        <div className='left-side'>
          <InfoCard
          currency ={this.state.currency}
            coinName={this.state.data.name}
            currentPrice={this.state.data.market_data ? this.state.data.market_data.current_price[this.state.currency] : ''}
            mCap24={this.state.data.market_data ? this.state.data.market_data.market_cap_change_percentage_24h : ''}
            ath={this.state.data.market_data ? this.state.data.market_data.ath[this.state.currency] : ''}
            atl={this.state.data.market_data ? this.state.data.market_data.atl[this.state.currency] : ''}
            sentiment={this.state.data.sentiment_votes_up_percentage}
            high24={this.state.data.market_data ? this.state.data.market_data.high_24h[this.state.currency] : ""}
            low24={this.state.data.market_data ? this.state.data.market_data.low_24h[this.state.currency] : ''}
          // twitterFollow={this.state.data.market_data.community_data ? this.state.data.market_data.community_data.twitter_followers : ''}
          />
          <ChartComp id={this.state.id} currency ={this.state.currency}/>
        </div>

        <div className='right-side'>
          <SideCardInfo
          currency ={this.state.currency}
            mcap={this.state.data.market_data ? this.state.data.market_data.market_cap[this.state.currency] : ''}
            priceChange24={this.state.data.market_data ? this.state.data.market_data.price_change_24h_in_currency[this.state.currency] : ''}
            totalVol={this.state.data.market_data ? this.state.data.market_data.total_volume[this.state.currency] : ''}
            circularSupply={this.state.data.market_data ? this.state.data.market_data.circulating_supply : ''}
          />
        </div>
        </div>
      </div>
    )
  }
}
