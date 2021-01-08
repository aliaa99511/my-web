import React, { Component } from 'react'
import FullScreen from '../Homefiles/FullScreen'
import Show from '../Homefiles/Show'
import Carousel from '../Homefiles/Carousel'
import Bublich from '../Homefiles/Bublich'
import Offer from '../Homefiles/Offer'
import Slides from '../Homefiles/Slides'
import Works from '../Homefiles/Works'
import Hoverlay from '../Homefiles/Hoverlay'
import Delicious from '../Homefiles/Delicious'
import Food from '../Homefiles/Food'
import Storiees from '../Homefiles/Storiees';
import Recipe from '../Homefiles/Recipe';
import Courses from '../Homefiles/Courses'
import Boorder from '../Homefiles/Boorder'
import Build from '../Homefiles/Build'
import Agency from '../Homefiles/Agency'
import Price from '../Homefiles/Price'

import Content1 from '../Homefiles/Content1'
import Content2 from '../Homefiles/Content2'


export class Home extends Component {
    render() {
        return (
            <div>
                
              <FullScreen /> 
              <Show />
              <Agency />
              <Slides/>
              <Works />
              <Hoverlay/>
              <Carousel />
              <Bublich />
              <Offer/>
              <Delicious />
              <Food />
              <Storiees />
              <Recipe />
              <Courses/>
              <Price />
              <Boorder/>
              <Build/>
            </div>
            
        )
    }
}

export default Home
/*
<i class="fa fa-rocket" aria-hidden="true"></i>
<i class="fa fa-cogs" aria-hidden="true"></i>
<i class="fa fa-diamond" aria-hidden="true"></i>
<i class="fa fa-chevron-right" aria-hidden="true"></i>

*/


/*import Hovers from '../Homefiles/Hovers'
              <Hovers />
*/

/*              
<List />
<Content1/>
<Content2/>
              <Shadow />
*/