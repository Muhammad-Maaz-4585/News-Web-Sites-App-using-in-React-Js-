import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import {
  Routes,
 Route,
 // Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<News key='general' pageSize={3} country="us" category="general" />} />
            <Route path='/business' element={<News key='business' pageSize={3} country="us" category="business" />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={3} country="us" category="entertainment" />} />
            <Route path='/general' element={<News key='general' pageSize={3} country="us" category="general" />} />
            <Route path='/health' element={<News key='health' pageSize={3} country="us" category="health" />} />
            <Route path='/science' element={<News key='science' pageSize={3} country="us" category="science" />} />
            <Route path='/sports' element={<News key='sports' pageSize={3} country="us" category="sports" />} />
            <Route path='/technology' element={<News key='technology' pageSize={3} country="us" category="technology" />} />
        </Routes>

        {/* <Routes>
        <Route path='/'>Element={<Route key='general' exact News pageSize={3} country="us" category="general"/>}</Route>
        <Route path='/buisness'><Route key='buisness' exact News pageSize={3} country="us" category="buisness"/></Route>
        <Route path='/entertainment'><Route key='entertainment' exact News pageSize={3} country="us" category="entertainment"/></Route>
        <Route path='/health'><Route key='health' exact News pageSize={3} country="us" category="health"/></Route>
        <Route path='/science'><Route key='science' exact News pageSize={3} country="us" category="science"/></Route>
        <Route path='/sports'><Route key='sports' exact News pageSize={3} country="us" category="sports"/></Route>
        <Route path='/technology'><Route key='technology' exact News pageSize={3} country="us" category="technology"/></Route>
        </Routes> */}
      </div>
    )
    }}


    // export default class App extends Component {
    //   render() {
    //     return (
    //       <div>
    //         <Navbar/>
    //         <News/>
    //         <Routes>
    //         <Route path='/'><Route key='general' exact News pageSize={3} country="us" category="general"/></Route>
    //         <Route path='/buisness'><Route key='buisness' exact News pageSize={3} country="us" category="buisness"/></Route>
    //         <Route path='/entertainment'><Route key='entertainment' exact News pageSize={3} country="us" category="entertainment"/></Route>
    //         <Route path='/health'><Route key='health' exact News pageSize={3} country="us" category="health"/></Route>
    //         <Route path='/science'><Route key='science' exact News pageSize={3} country="us" category="science"/></Route>
    //         <Route path='/sports'><Route key='sports' exact News pageSize={3} country="us" category="sports"/></Route>
    //         <Route path='/technology'><Route key='technology' exact News pageSize={3} country="us" category="technology"/></Route>
    //         </Routes>
    //       </div>
    //     )
    //     }}
    

