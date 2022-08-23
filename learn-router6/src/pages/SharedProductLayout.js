import { Outlet } from "react-router-dom";

 
const Home = () =>{
    return (
        <>
            <section className="section">
                <h2>product</h2>

                {/* show data in product page */}
                <Outlet />
            </section>

        </>


    )
}

export default Home