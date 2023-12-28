import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';

const API="https://api.pujakaitem.com/api/products"

const SingleProduct = () => {

  const{getSingleProduct, isSingleLoading, singleProduct} = useProductContext();

  const {id} = useParams();

  const{id:shuvo, name,
    company,price,description,
    category,stars,stock,review}
    = singleProduct;

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[]);

  return (
    <>
        <div className='container py-5'>
          <h1>Single Product Page {name}</h1>
        </div>
    </>
  )
}

export default SingleProduct