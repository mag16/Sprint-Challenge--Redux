import React, { Component } from 'react';
import './App.css';

import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';




/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */



class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
      </div>
  <SmurfForm />
        </header >
  { this.props.error ? <h3>Error Fetching Smurfs</h3> : null }
  < div className = "Flex-Container" >
    {
      this.props.gettingSmurfs ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
          <Smurfs smurfs={this.props.smurfs} />
      )
  }
    
        </div >
      </div >  
    );
  }
}

  const mapStateToProps = state => {
    const { rootReducer } = state;
    return {
      smurfs: rootReducer.smurfs,
      error: rootReducer.error,
      gettingSmurfs: rootReducer.gettingSmurfs
    };
  };  

  
  export default connect(mapStateToProps, { getSmurfs })(App);
