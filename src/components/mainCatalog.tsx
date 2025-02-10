export const MainCatalog = ()=>{
    return(
        <>
        <div className="main_catalog">
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
                        <a href="" className="menu_category_main-a">Брюки</a>
                        <a href="" className="menu_category_main-a">Блузы</a>
                        <a href="" className="menu_category_main-a">Жакеты, жилеты</a>
                        <a href="" className="menu_category_main-a">Кардиганы</a>
                        <a href="" className="menu_category_main-a">Комбинезоны</a>
                    </nav>
                </div>
            </main>
        </div>
        </>
    )
}