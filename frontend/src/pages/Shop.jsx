import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts,reset } from '../features/product/productSlice'
import ProductItem from '../components/ProductItem'
import './Shop.css'
// import axios from 'axios'



const Shop = () => {
  const [list,setList] = useState(false)
  const dispatch= useDispatch()
  const { products,isSuccess,isError,message } = useSelector((state)=> state.product)
  //
//   const [po,setPo] = useState(false)
//   let data
//   const handleClick =async ()=>{
//     data = await axios.get('http://localhost:4000/products/')
//     setPo(!po)
//     console.log(data.data)
//   }
// useEffect(()=>{
//   console.log(po)
//   console.log(data)
// },[data])

  // const handleClick =async ()=>{
  //   dispatch(getProducts())
  //   console.log('clicked from shop')
  // }
 //

 useEffect(() => {
  if (isError) {
    console.log(message)
  }

  dispatch(getProducts())

  return () => {
    dispatch(reset())
  }
}, [isError, message, dispatch])

useEffect(()=>{
  setList(true)
},[products.length])

  return (
    <>
    <div className='cardcontainer'>
    {products.map(pro=> (
      <ProductItem key={pro._id} name={pro.name} rating={pro.rating} image={pro.image} id={pro._id} />
    )
    )}
    </div>
    </>
  )
}

export default Shop