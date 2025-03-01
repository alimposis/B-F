import MarkSVG from './../assets/svg/mark.svg'
import WatchSVG from './../assets/svg/watch.svg'
import PhoneSVG from './../assets/svg/phone.svg'

export const MainFooter = ()=>{

    return(
        <>
            <footer>
                <div className="container">
                    <a href="/" className="logo">
                            <img src="/src/assets/imgs/logo.png" alt="" />
                    </a>
                    <div className="footer__info">
                        <img src={MarkSVG} alt="" />
                        <p>
                        Республика Беларусь,<br/> 
                        г. Брест, ул. Гродненская<br/>
                        29/2 пом. 5
                        </p>
                    </div>
                    <div className="footer__info">
                        <img src={WatchSVG} alt="" />
                        <p>
                        Режим работы:<br/>
                        Ежедневно: с 9:00<br/>
                        до 17:00
                        </p>
                    </div>
                    <div className="footer__info">
                        <img src={PhoneSVG} alt="" />
                        <a href="tel:+375292079615">+375 (29) 207-96-15</a>
                    </div>
                </div>
                <nav className="footer__nav">
                    <a href="">Каталог</a>
                    <a href="">О нас</a>
                    <a href="">Сотрудничество</a>
                    <a href="">Plus Size</a>
                    <a href="">Контакты</a>
                </nav>
            </footer>
        </>
    )
}