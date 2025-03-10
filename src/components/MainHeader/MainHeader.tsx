import { Logo_img, Menu_button_img } from "@/assets/imgs"
import { IconMail, IconTel } from "@/assets/svg"

export const MainHeader =()=>{
        return(
        <>
            <header>
                <main className="container">
                    <a href="/" className="logo">
                        <img src={Logo_img} alt="" />
                    </a>
                    <nav className="header_menu">
                        <a href="/catalog">Каталог</a>
                        <a href="">О НАС</a>
                        <a href="">Сотрудничество</a>
                        <a href="">Plus Size</a>
                        <a href="">Контакты</a>
                    </nav>
                    <nav className="header_main-tel">
                        <a href=""><IconMail/><span>alimpostea@gmail.com</span></a>
                        <a href=""><IconTel/><span>+375 (29) 150-28-86</span></a>
                    </nav>
                    <button className="menu_button_button">
                        <img src={Menu_button_img} alt="" />
                    </button>
                </main>
            </header>
        </>
    )
}
