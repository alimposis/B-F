import { MainHeader } from '../components/MainHeader/MainHeader'
import { MainSwiper } from '../components/MainSwiper/MainSwiper'
import { MainCatalog } from '../components/MainCatalog/MainCatalog'
import { MainSliderProducts } from '../components/MainSliderProducts/MainSliderProducts'
import { useGetCategoriesProductsQuery } from '../store/api/api'
import { MainFooter } from '../components/MainFooter/MainFooter'

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
      <MainFooter/>
    </>
  )
}

