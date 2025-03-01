import { MainHeader } from "../components/mainHeader"
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from "../store/api/api";
import { useEffect, useState } from "react";
import { IProduct } from "../models";
import { MainFooter } from "../components/mainFooter";

export const ProductList =()=>{
    const [product,setProduct]=useState<IProduct>()
    const { id } = useParams<{id:string}>();
    const { data } = useGetProductQuery({id: id})
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
                            <h2>Рейтинг: </h2>
                            <p>{data?.rating.rate}</p>
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
                    </main>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}