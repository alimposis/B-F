import { use, useEffect, useState } from "react";

import { MainHeader } from "../components/mainHeader";

import SVGOpen from "./../assets/svg/free-icon-up.svg"
import SVGClose from "./../assets/svg/free-icon-down.svg"
import SVGMenuClose from "./../assets/svg/close.svg"
import SVGMenuAdaptive from "./../assets/svg/SVG-menu-adaptive.svg"

import { useDispatch} from "react-redux";

import { useGetAllProductsQuery, useGetCategoriesProductsQuery } from "../store/api/api";
import { addToAllProducts} from "../store/api/allProducts.slice";

import { CatalogProducts } from "../components/catalogProducts";
import { MainFooter } from "../components/mainFooter";
import { useWindowSize } from "../hooks/useResize";

export const Catalog = ()=>{

    const [adaptiveCategoryMenuState,setAdaptiveCategoryMenuState]= useState<Boolean>(true)
    const [categoryMenuState,setCategoryMenuState]= useState<Boolean>(false)
    const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
    const [categoriesTrue, setCategoriesTrue] = useState<string[]>([]);

    const adaptiveWidth = useWindowSize().width

    const {data} = useGetAllProductsQuery(null)
    const {data:dataCategory} = useGetCategoriesProductsQuery(null)


    const dispatch = useDispatch()

        const handleAddProducts = () => {
            dispatch(addToAllProducts(data))
        };
        handleAddProducts()

    useEffect(()=>{
    if(dataCategory?.length !== 0){
        dataCategory?.map((e)=>{
            setSelectedCategories((prev)=>({...prev, [e]:false}))
        })
    }
    },[dataCategory])


    
    const keys = Object.keys(selectedCategories);

    useEffect(()=>{
        const trueCategories = Object.entries(selectedCategories).filter(([key, value]) => value).map(([key])=> {return key})
        setCategoriesTrue(trueCategories);
    },[selectedCategories])
    useEffect(()=>{
        if(adaptiveWidth <= 850){
        setTimeout((        
            ()=>setAdaptiveCategoryMenuState(false)
        ),200)
        }else{
            setTimeout((        
                ()=>setAdaptiveCategoryMenuState(true)
            ),200)
        }
        console.log(adaptiveCategoryMenuState)
    },[adaptiveWidth])
    return(
        <>
        <MainHeader/>
        <div className="container containerCatalog">
            {adaptiveWidth <= 850 && 
            <button className="menu__adaptive"><img src={SVGMenuAdaptive} alt="" onClick={()=>setAdaptiveCategoryMenuState(true)}/></button>
            }
            {adaptiveCategoryMenuState &&
                <div className={adaptiveWidth <= 850 ?"menu_Catalog menu__catalog__adaptive":"menu_Catalog"}>
                <img className="SVG__menu__close" src={SVGMenuClose} alt="" onClick={()=>setAdaptiveCategoryMenuState(false)}/>
                <button className="main_catalog-button menu_Catalog-button" onClick={()=>setCategoryMenuState(!categoryMenuState)}>
                    Категории
                    <img src={categoryMenuState ? SVGClose : SVGOpen} alt="" />
                </button>
                {categoryMenuState ? 
                    <div style={{display:"none"}} className="menu_Catalog-wrapper">
                    </div>:
                    <div className="menu_Catalog-wrapper">
                        {keys?  
                        keys.map((e)=>{
                            return(
                            <div className="category_button">
                            <input 
                            type="checkbox" 
                            onChange={()=>{
                                setSelectedCategories((prev)=>({
                                    ...prev,
                                    [e]:!prev[e],
                                }))
                            }}
                            />
                            <h3>{e}</h3>
                        </div>)
                        }): <></>}
                    </div>
                }
            </div>
            }
            <CatalogProducts categoriesTrue={categoriesTrue} />
        </div>
        <MainFooter/>
        </>
    )
}