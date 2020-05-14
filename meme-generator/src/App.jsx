import React from 'react';
import './App.css';
import mock from './mock_data';

function App() {
  return (
    <div className="App">
      {mock.data.memes[0].url}
    </div>
  );
}

export default App;
