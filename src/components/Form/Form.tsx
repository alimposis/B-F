import { FormInput } from './FormInput/FormInput'

import { useDispatch, useSelector } from 'react-redux'
import { openCloseFormProduct } from '../../store/api/allProducts.slice'
import { RootState } from '../../store/store'

import { FC, useEffect, useState } from 'react'

import { IProduct } from '../../models'
import { IconClose } from '@/assets/svg'
import axios from 'axios'
import { formInputs } from './formInputs'
import { Form_img, Form_logo_img } from '@/assets/imgs'



export const Form: FC<IProduct> = ({ category, price, title}) => {
    const [responseState, setResponseState] = useState(false)

    const dispatch = useDispatch()
    const formState = useSelector((state: RootState) => state.allProducts.form)

    function auth(formData: FormData) {
        const userName = formData.get('userName')
        const lastName = formData.get('lastName')
        const phone = formData.get('tel')
        const mail = formData.get('mail')
        
        const text = `Пользователь ${userName} ${lastName}, номер телефона:${phone}, электронная почта :${mail}. Сделал заказ товара:${title};цена${price};категория:${category}`

        setResponseState(false)
        axios.post(import.meta.env.VITE_TELEGRAM_BOT,{
            chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
            text: text,
        })
    }
    useEffect(() => {
        document.body.style.overflow = !formState ? 'auto' : 'hidden'
        setResponseState(!!formState)
    }, [formState])

    return (
        <>
            {formState && (
                <>
                    <div
                        onClick={() => dispatch(openCloseFormProduct())}
                        className="bacground__form"
                    />
                    <form action={auth}>
                        <div className="container">
                            <button
                                onClick={() => dispatch(openCloseFormProduct())}
                                className="form__close"
                            >
                            <IconClose/>
                            </button>
                            <img className="img__form" src={Form_img} alt="" />
                            <div className="form__desc">
                                <img className="form__logo" src={Form_logo_img} alt=""/>
                                {responseState ? (
                                    <>
                                        <p className="form__p">
                                            Оставьте заявку
                                            <br className="br__adaptive" /> и наши специалисты
                                            <br /> свяжутся <br className="br__adaptive" /> с Вами в
                                            ближайшее время
                                        </p>
                                        {formInputs.map((e)=>{
                                            return <FormInput key={e.name} {...e}/>
                                        })}
                                        <button
                                            type="submit"
                                            className="form__button"
                                        >
                                            Оставить заявку
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h2>СПАСИБО ЗА ЗАКАЗ!</h2>
                                        <p>
                                            Наши специалисты свяжутся
                                            <br />
                                            с Вами
                                            <br />в ближайшее время
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}
