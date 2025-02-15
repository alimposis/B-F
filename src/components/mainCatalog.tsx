import { useGetCategoriesProductsQuery } from "../store/api/api";
import { CatalogApp } from "./catalogApp"

export const MainCatalog = ()=>{
    const {data} = useGetCategoriesProductsQuery(null)
    return(
        <>
        <div className="main_catalog" id="caralog">
            <main className="container">
                <h2 className="main_catalog-h2">Каталог</h2>
                <a className="main_catalog-button" href="">
                    <button >
                        Смотреть всё
                    </button>
                </a>
                <div className="main_catalog-wrapper">
                    <nav className="menu_category_main">
                        <span className="menu_category_main-span">Категории</span>
                        {(data || []).map((e, index) => {
                            const hrefValue = typeof e === 'boolean' ? String(e) : e;
                            return <a key={index} href={`#${hrefValue}`} className="menu_category_main-a">{hrefValue}</a>;
                        })}
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