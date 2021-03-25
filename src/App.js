import './App.css';
import QrReader from 'react-qr-reader'
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  state = {
    result: null,
    infoMessage: 'Scanning qr-code...'
  }
  

  handleScan = data => {
    if (data && data !== this.state.result) {
      this.setState({
        result: data,
      })

    }
  }
  handleError = err => {
    console.error(err)
  }



  sendQrCode = () => {
    if (this.state.result) {
      axios.post(`http://hq.apps-garden.com:2345/api/cavca-token`, {cavcaToken: this.state.result})
      .then(
        (res) => {
          this.setState({infoMessage: 'QR-code successfully sent.'})
          setTimeout(()=>{this.setState({infoMessage: 'Scanning qr-code...'})}, 5000)
        },
        (error) => { console.log(error) }
      )
    } else {
      this.setState({
        infoMessage: "No QR-code found"
      })
      setTimeout(()=>{this.setState({infoMessage: 'Scanning qr-code...'})}, 5000)
    }
    
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <p >{this.state.infoMessage}</p>
      </header>
      <main>
      <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={'environment'}
          style={{ width: '70%' }}
          
        />
        
        <p className="result">{this.state.result || 'No result yet'}</p>
        <button onClick={() => {this.sendQrCode()}} className="btn">Send qr-code</button>
      </main>
    </div>
    )
  }
}

export default App;
