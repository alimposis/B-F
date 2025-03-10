import { MainHeader } from "../components/MainHeader/MainHeader"
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from "../store/api/api";
import { useEffect, useState } from "react";
import { IProduct } from "../models";
import { MainFooter } from "../components/MainFooter/MainFooter";
import { MainSliderProducts } from "../components/MainSliderProducts/MainSliderProducts";
import { Form } from "../components/Form/Form";
import { useDispatch } from "react-redux";
import { openCloseFormProduct } from "../store/api/allProducts.slice";

export const ProductList =()=>{
    const [product,setProduct]=useState<IProduct>()

    const { id } = useParams<{id:string}>();
    const { data } = useGetProductQuery({id:id!})

    const dispatch = useDispatch()

    useEffect(()=>{
        setProduct(data)
    },[data])
    
    return(
        <>
            <MainHeader/>
            <div className="product__Body">
                <div className="container">
                    <img className="product__img" src={product?.image} alt="" />
                    <main className="product__desc">
                        <h1>{data?.title}</h1>
                        <div className="product__desc__group">
                            <h2>Рейтинг:</h2>
                            <p>{data?.rating?.rate}</p>
                        </div>
                        <div className="product__desc__group">
                            <h2>Категория: </h2>
                            <p>{data?.category}</p>
                        </div>
                        <div className="product__desc__group">
                            <h2>Цена: </h2>
                            <p>{data?.price}$</p>
                        </div>
                        <span>
                            <h2>Описание:</h2>
                            <p>
                                {data?.description}
                            </p>
                        </span>
                        <button onClick={()=>dispatch(openCloseFormProduct())} className="product__button">Заказать</button>
                    </main>
                </div>
            </div>
            {product?.category && <MainSliderProducts props={product?.category}/>}
            <MainFooter/>
            <Form {...product}/>
        </>
    )
}