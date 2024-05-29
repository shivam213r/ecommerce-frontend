import { useState } from "react";
import {
    FaSearch,
    FaShoppingBag,
    FaSignInAlt,
    FaUser,
    FaSignOutAlt,
  } from "react-icons/fa";
import { Link } from "react-router-dom";


const user ={ _id : "", role:""}

const Header = () => {
    
    const [isOpen, setIsOpen]= useState<boolean>(false)

  return (
    <nav className="header">
       <div className="logo">Logo</div>
       <div className="second">
        <Link to={'/'}>Home</Link>
        <Link to={'/search'}>
            <FaSearch/>
        </Link>
        <Link to={'/Cart'}>
            <FaShoppingBag/>
        </Link>
        {
            user?._id?(
                <button onClick={()=> setIsOpen((prev)=>!prev)}>
                    <FaUser/>
                    <dialog open={isOpen}>
                        <div>
                            {
                                user.role == "admin" && (<Link to={"/admin/dashboard"}>
                                dashboard
                            </Link>)
                            }
                            <Link to = {'/orders'}>Orders</Link>
                            <button>
                                <FaSignOutAlt/>
                            </button>
                        </div>
                       
                    </dialog>
                </button>
            ): <Link to={'/Login'}>
                <FaSignInAlt/>
            </Link>
        }
        

</div>
    </nav>
    
  )
}

export default Header