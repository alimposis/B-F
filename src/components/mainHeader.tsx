
export const MainHeader =()=>{
        return(
        <>
            <header>
                <main className="container">
                    <a href="/" className="logo">
                        <img src="./src/assets/imgs/logo.png" alt="" />
                    </a>
                    <nav className="header_menu">
                        <a href="#caralog">Каталог</a>
                        <a href="">О НАС</a>
                        <a href="">Сотрудничество</a>
                        <a href="">Plus Size</a>
                        <a href="">Контакты</a>
                    </nav>
                    <nav className="header_main-tel">
                        <a href=""><img src="./src/assets/svg/mail.svg" alt="" /> <span>alimpostea@gmail.com</span></a>
                        <a href=""><img src="./src/assets/svg/tel.svg" alt="" /><span>+375 (29) 150-28-86</span></a>
                    </nav>
                    <button className="menu_button_button">
                        <img src="./src/assets/imgs/menu_button.png" alt="" />
                    </button>
                </main>
            </header>
        </>
    )
}
