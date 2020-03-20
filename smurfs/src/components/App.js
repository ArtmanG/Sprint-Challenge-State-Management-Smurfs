import React from "react";

import SmurfsButton from './SmurfsButton';
import SmurfsFrom from './SmurfsForm';
import SmurfsList from './SmurfsList';
import "./App.css";

const App = () => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfsButton />
        <SmurfsList />
        <SmurfsFrom />
      </div>
    );
}

export default App;
