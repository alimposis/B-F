import { useDispatch } from "react-redux"
import { useGetAllProductsQuery } from "../../store/api/api"
import { Product } from "../Product/Product"
import { addToAllProducts } from "../../store/api/allProducts.slice"


export const CatalogApp = ()=>{
    const {data} = useGetAllProductsQuery(null)

    const dispatch = useDispatch()

        const handleAddProducts = () => {
            dispatch(addToAllProducts(data))
        };
        handleAddProducts()

    return(
        <>
                {(data || []).map((e)=>{
                    return <Product key={e.id} product={e}/>
                })}
        </>
    )

}