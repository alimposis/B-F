import { useEffect, useState } from "react";
import { Category, IProduct } from "../../models";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Product } from "../Product/Product";
export const CatalogProducts = ({categoriesTrue}:{categoriesTrue:string[]})=>{

    const [productCategories, setProductCategories] = useState<IProduct[]>([]);

    function filterObjects(arr:IProduct[], conditions:Category){
        console.log(conditions)
        return arr.filter((obj)=>{
            return Object.keys(conditions).every(category=>{
                return obj[category as keyof IProduct]===conditions[category as keyof Category]
            })
        })
    }
    const allProducts = useSelector((state: RootState) => state.allProducts.allProducts);
    useEffect(()=>{
        if(categoriesTrue && categoriesTrue.length !== 0){
            let filteredObjects:IProduct[] = []
            categoriesTrue.forEach((e)=>{
                filteredObjects = [...filteredObjects,...filterObjects(allProducts, { category: e })];
            })
            setProductCategories(filteredObjects)
        }
    },[categoriesTrue])
    console.log(productCategories)

    return(
        <>
            <main className="wrapper_product">
                {productCategories && productCategories.length > 0 ? (
                    productCategories.map((e) => <Product key={e.id} product={e} />)
                        ) : (
                    <div>Выберите фильтр</div>
                )}
            </main>
        </>
    )
}