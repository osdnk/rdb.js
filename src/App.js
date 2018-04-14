import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sample from './components/Sample';

const App = () => (
  <MuiThemeProvider>
    <div className="content">
      <div>
        <Sample/>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
