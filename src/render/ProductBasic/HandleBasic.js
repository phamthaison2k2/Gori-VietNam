import NavBar from '../../Components/NavBar/NavBar'
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import ContentBasic from './dataProductBasic/ContentBasic';


const HandleBasic = () => {
    return (  
        <>
            <NavBar/>
            <Slider/>
            <ContentBasic/>
            <Footer/>
        </>
    );
}
 
export default HandleBasic;