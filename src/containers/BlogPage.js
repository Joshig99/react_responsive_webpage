import React, {Component} from 'react';
import Navbarr from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

class BlogPage extends Component{
    render(){
        return(
            <div>
                <Navbarr/>
                <Blog/>
                <Footer/>
            </div>
        )
    }
}
export default BlogPage;