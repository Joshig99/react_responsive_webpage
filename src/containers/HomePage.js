import React, {Component} from 'react';
import Navbarr from '../components/Navbar';
import PsdFiles from '../components/PsdFiles';
import Album from '../components/Album';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Navbarr/>
                <PsdFiles/>
                <Album/>
                <Blog/>
                <Footer/>
            </div>
        )
    }
}
export default HomePage;