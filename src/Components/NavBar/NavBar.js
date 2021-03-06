import logoGori from '../../assets/logo/logoGori.webp'
import ListBar from './ListBar/ListBar'
import IconBar from './IconBar/IconBar'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
                
        <div className="w-full h-[70px] bg-[#fff]">
            <div className="flex flex-row w-[1170px] mx-auto ">

                <Link to="/">
                    <img src={logoGori} className="h-[70px] cursor-pointer"/>
                </Link>

                <ListBar/>

                <IconBar/>

            </div>
        </div>

    )
}

export default NavBar;