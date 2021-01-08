import React, { Component } from 'react'
import FullScreen3 from '../Blogfiles/FullScreen3'
import Delicious from '../Blogfiles/Delicious'
import Storiees from '../Blogfiles/Storiees';
import Recipe from '../Blogfiles/Recipe';
import Courses from '../Blogfiles/Courses'
import Boorder from '../Blogfiles/Boorder'


export class Blog extends Component {
    render() {
        return (
            <div>
               <FullScreen3 />
              <Delicious />
              <Storiees />
              <Recipe />
              <Courses/>
              <Boorder/>
            </div>
        )
    }
}

export default Blog
