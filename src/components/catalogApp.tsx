import { useGetAllProductsQuery } from "../store/api/api"
import { Product } from "./product"


export const CatalogApp = ()=>{
    const {data} = useGetAllProductsQuery(null)
    return(
        <>
                {(data || []).map((e)=>{
                    return <Product key={e.id} product={e}/>
                })}
        </>
    )
}