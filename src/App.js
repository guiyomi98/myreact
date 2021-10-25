import React from 'react';
import Navigation from './Navigation'
import List from './List'

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <List
        title="title"
        like={true}
      />
    </div>
  );
}

export default App;
