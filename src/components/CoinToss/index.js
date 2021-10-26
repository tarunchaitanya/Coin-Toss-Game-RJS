// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    resultUrl: headsUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let resultHeadsCount = headsCount
    let resultTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsUrl
      resultHeadsCount += 1
    } else {
      tossImage = tailsUrl
      resultTailsCount += 1
    }

    this.setState({
      resultUrl: tossImage,
      headsCount: resultHeadsCount,
      tailsCount: resultTailsCount,
    })
  }

  render() {
    const {resultUrl, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="toss-image" src={resultUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="stat-container">
            <p className="counter">Total: {total}</p>
            <p className="counter">Heads: {headsCount}</p>
            <p className="counter">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
