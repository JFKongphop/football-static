import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
 
const SharedLayout = () =>{
    // share of all layout to other by outlet and stylednavabar
    return (
        <>
            {/* show nav bar  */}
            <nav className="console-nav">
                <h1>Football static</h1>
                <StyledNavbar/>
            </nav>
            

            {/* show all data in all page */}
            <Outlet />
        </>
  

    )
}

export default SharedLayout