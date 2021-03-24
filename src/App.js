import './App.css';
import QrReader from 'react-qr-reader'
import React from 'react'

class App extends React.Component {
  state = {
    result: 'No result'
  }
  

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
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
        <p>Make a photo of qr-code</p>
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
