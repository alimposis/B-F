
import { Product } from '../Product/Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

import { useGetProductsCategoryQuery } from '../../store/api/api';

interface PopupCategories {
    props: string
}

export const MainSliderProducts = ({props}:PopupCategories) =>{
    const {data} = useGetProductsCategoryQuery({category:props,limit:4})
    return(
        <>
            <div className="main_slider_products" id={props}>
                <div className="container">
                    <h2 className="main_catalog-h2" style={{ marginRight: 'auto' }}>
                    {props}
                    </h2>
                    <div className="products_slider">
                        {(data||[]).map((e)=>{
                                return (
                                    <Product product={e}/>
                            )
                            })}
                    </div>
                </div>
                </div>
        </>
    )

}