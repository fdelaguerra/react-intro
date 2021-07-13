import React from 'react';
import ReactDOM from 'react-dom';
//import { Select } from './select';
import { FlexDiv } from './FlexDiv';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      samples: "writingSamples"
      };
  }



  render() {
    return (
      <div>
        <FlexDiv samples={this.state.samples} />
      </div>
        )
      }
    }
      
  
  
  ReactDOM.render(
      <App />,
      document.getElementById('root')
  );


export default App;
