import { Link, useParams } from "react-router-dom";
import data from "../data";


const SingleProduct = () => {
    // show of each product when click of the link below of the title

    // show of the page Id 
    // when click of the more info that go to this page
    console.log(useParams());

    // show of the pageId
    const { productId } = useParams();

    // when prduct = productId that is show images and name
    const product = data.find((data)=>data.Name === productId)
    const { Image, Name } = product;
    return (
        <section className="section product">
            <img src={Image} alt={Name}/>
            <h5>{Name}</h5>
            <Link to="/products">Back to data</Link>
        </section>
    )
}

export default SingleProduct