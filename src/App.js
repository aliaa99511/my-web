import React, { Component } from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import './App.css'

import Navbarr from './Component/Navbarr'
import Home from './Component/Home'
import About from './Component/About'
import Blog from './Component/Blog'
import Testimonials from './Component/Testimonials'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Footer from './Component/Footer'



class App extends Component {

      render() {
          return (
            <BrowserRouter>
                <div>
                  <Navbarr />
                  
                  <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/About"> <About/> </Route>
                    <Route path="/Blog"><Blog/></Route>
                    <Route path="/Testimonials"><Testimonials/></Route>
                    <Route path="/Services"><Services/></Route>
                    <Route path="/Contact"><Contact/></Route>
                  </Switch>
  
                  <Footer/>

                </div>
             </BrowserRouter>

          )
    }
}

export default App

/*
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
/*background-color: #3535a2;*/
/*لون الموقع الجاي*/

/*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/

/*تحفة    box-shadow: 0  5px  8px rgba(0, 0, 0, 0),
                0  5px  8px  rgba(0, 0, 0, 0.1);*/

  /*    background: #f9218d;*/


  /*photos shape for my-web      background: #ff2143;*/                
  /*    box-shadow: 0 5px 8px rgba(0, 0, 0, 0), 0 5px 8px rgba(0, 0, 0, 0.1);
*/


/* strange form
form.search-box {
    padding: 25px 40px 0 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}*/



/*سهم
.blog-entry .text .topper:after {
    position: absolute;
    bottom: -10px;
    left: 40px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #4e9525 transparent transparent transparent;
}*/
/*    background: #f4feff;
*/