import { useState } from "react";
import { useGetCategoriesProductsQuery } from "../../store/api/api";
import { CatalogApp } from "../CatalogApp/CatalogApp";

export const MainCatalog = ()=>{
    const {data} = useGetCategoriesProductsQuery(null)
    const [categoryMenuState,setCategoryMenuState] =useState<boolean>(true)
    return(
        <>
        <div className="main_catalog" id="caralog">
            <main className="container">
                <h2 className="main_catalog-h2">Каталог</h2>
                <a className="main_catalog-button" href="">
                    <button>
                        Смотреть всё
                    </button>
                </a>
                <div className="main_catalog-wrapper">
                    <nav className="menu_category_main">
                        <span className="menu_category_main-span" onClick={()=>setCategoryMenuState(!categoryMenuState)}>Категории</span>
                        {categoryMenuState ?
                            (data || []).map((e, index) => {
                            const hrefValue = typeof e === 'boolean' ? String(e) : e;
                            return <a key={index} href={`#${hrefValue}`} className="menu_category_main-a">{hrefValue}</a>;
                            })
                        :
                            <></>
                        }
                    </nav>
                    <div className="wrapper_products_main">
                        <CatalogApp/>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}