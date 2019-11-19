import React, {Component} from 'react';
import Navbarr from '../components/Navbar';
import PsdFiles from '../components/PsdFiles';
import Footer from '../components/Footer';


class PsdFilesPage extends Component{
    render(){
        return(
            <div>
                <Navbarr/>
                <PsdFiles/>
                <Footer/>
            </div>
        )
    }
}
export default PsdFilesPage;