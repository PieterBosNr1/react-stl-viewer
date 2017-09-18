import React, {Component} from 'react';
import STLViewer from '../../src/STLViewer';

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			color: '#fdd20b'
		}

		this.clickBlue = this.clickBlue.bind(this);
		this.clickRed = this.clickRed.bind(this);
	}

	clickBlue(e) {
		e.preventDefault()
		this.setState({color: '#8fce35'});
	}

	clickRed(e) {
		e.preventDefault()
		this.setState({color: '#d80008'});
	}

  render(){
    return (
      <div>
        <STLViewer key="1" url="dist/static/l-beam.stl" modelColor={this.state.color}/>
  		<button onClick={this.clickRed}>red</button>
      	<button onClick={this.clickBlue}>green</button>
		  <STLViewer key="2" url="dist/static/beam.stl" modelColor="#008adc"/>
      </div>
    );
  }
};
export default App;
