import './App.css';
import QrReader from 'react-qr-reader'
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  state = {
    result: 'No result',
  }
  

  handleScan = data => {
    
    if (data && data !== this.state.result) {
      axios.post(`https://hq.apps-garden.com:2345/api/cavca-token`, {cavcaToken: data})
      .then(res => {
        alert('QR-code sent')
      })

      this.setState({
        result: data,
      })

    }
  }
  handleError = err => {
    console.error(err)
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <p>Scan qr-code</p>
      </header>
      <main>
      <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={'environment'}
          style={{ width: '100%' }}
          
        />
        <p>{this.state.result || 'No result yet'}</p>
      </main>
    </div>
    )
  }
}

export default App;
