import { MainHeader } from '../components/mainHeader'
import { MainSwiper } from '../components/mainSwiper'
import { MainCatalog } from '../components/mainCatalog'

console.log(1)
setTimeout(() => {
    console.log(2)
});
new Promise( resolve =>{
  resolve(console.log(3))
})

export const App =()=>{
  return (
    <>
      <MainHeader/>
      <MainSwiper/>
      <MainCatalog/>
    </>
  )
}

