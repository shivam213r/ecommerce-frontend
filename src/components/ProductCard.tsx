import { FaPlus,FaInfoCircle } from "react-icons/fa"

type productprop = {
    productid: string;
    productname: string;
    photo: string;
    price: number;
    stock: number;
    // handler: () => void;

}

const ProductCard = ({ productid, productname, photo, price, stock }: productprop) => {
    return (
        <div className="productcard">
            <img src={photo} alt={productname} />
            <p>{productname}</p>
            <span>${price}</span>

            <div>
                <button >
                    <FaPlus/>
                </button>
                <button>
                    <FaInfoCircle/>
                </button>
            </div>

        </div>
    )
}

export default ProductCard