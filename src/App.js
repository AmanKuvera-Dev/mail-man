import React, { useState } from 'react';
import './App.css';
import Header from './Components/Nav/Header'
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mail from './Components/Body/Mail/Mail.jsx'
import EmailList from './Components/Body/EmailList/EmailList.jsx'
import sliderContext from './Context/sliderContext'
import ComposeButton from './Components/Compose/ComposeButton'

function App() {
  const [navSlider, setNavSlider] = useState(true)
  const [navSliderHoverState, setNavSliderHoverState] = useState(false)
  return (
    <Router>
      <div className="app">
        <sliderContext.Provider value={{navSlider,setNavSlider,navSliderHoverState, setNavSliderHoverState}}>
          <Header />
          <div className="app__body">
            <Sidebar/>
            <ComposeButton/>
            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>
              <Route path="/">
                <EmailList/>
              </Route>
            </Switch>
          </div>
        </sliderContext.Provider>
      </div>
    </Router>
  );
}

export default App;
