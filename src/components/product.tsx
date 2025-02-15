import { Product as intProduct } from "../models"

interface PopupProduct {
    product: intProduct
}
export const Product = ({product}:PopupProduct)=>{
    return(
        <>  
            <main className="product_wrapper">
                <img src={product.image} alt="" />
                <div className="product_wrapper-title_wrapper">
                    <h2>{product.title}</h2>
                    <h2>{product.price}</h2>
                    <a href="">
                        <button>
                            Подробнее
                        </button>
                    </a>
                </div>
            </main>
        </>
    )
}