import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import Helmet from "react-helmet"

function App() {
  return (
      <div className="App">
        <Helmet>
          <meta charSet='utf-8' />
          <link rel="shortcut icon" href="http://sstatic.net/stackoverflow/img/favicon.ico"/>
          <title>Testla Web</title>
        </Helmet>
        <Header />
        <Home />
      </div>
  );
}

export default App;
