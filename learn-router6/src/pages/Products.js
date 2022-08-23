import { Link } from "react-router-dom";
import data from "../data";


const Products = () =>{
    // show of all product page but when click of the link below that go to singleProduct
    return (
        <section className="section">
            
            {/* call products data  */}
            <div className="products">
                {data.map((data)=>{
                    return <article key={data.Name}>
                        <h5>{data.Name}</h5>
                        {/* link to more detail page */}
                        <Link to={`/products/${data.Name}`}>more info</Link>
                    </article>
                })}
            </div>
            <Link to='/' className="btn">Home</Link>
        </section>
    )
}

export default Products