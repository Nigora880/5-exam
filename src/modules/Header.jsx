import NavLink from "../components/NavLink"
import {Logo} from "../assets/img"

function Header() {
    const navlist = ["Home", "About Me", "Pages", "Contact Us"]
    return(
        <header className="py-[55px]">
          <div className="containers flex items-center justify-between">
             <img src={Logo} alt="logo img " width={176} height={41}/>
             <nav className="flex gap-[82px] items-center">
              {navlist.map((item, index) => <NavLink key={index} title={item}/>)}
            
             </nav>
             
          </div>
        </header>
    )
}

export default Header