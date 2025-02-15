import { MainHeader } from '../components/mainHeader'
import { MainSwiper } from '../components/mainSwiper'
import { MainCatalog } from '../components/mainCatalog'
import { MainSliderProducts } from '../components/mainSliderProducts'
import { useGetCategoriesProductsQuery } from '../store/api/api'
import { store } from '../store/store'
import { useSelector } from 'react-redux'

export const App =()=>{
  const {data} = useGetCategoriesProductsQuery(null)
  return (
    <>
      <MainHeader/>
      <MainSwiper/>
      <MainCatalog/>
      {(data || []).map((e)=>{
          return <MainSliderProducts key={Math.random()} props={e} />
      })}
    </>
  )
}

