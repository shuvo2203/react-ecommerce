import React from 'react';
import { useProductContext } from '../context/ProductContext';
import Product from './Product';

const FeaturedProducts = () => {

    const{ isLoading,featureProducts } = useProductContext();
    
    if(isLoading){
        return<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }

  return (
    <>
        <div className='container pb-5'>
            <p>Check Now</p>
            <h2 className='pb-5'>Our Feature Services</h2>
           
                <div className='feature'>
                {
                    featureProducts.map((curElem)=>{
                        return <Product key={curElem.id} {...curElem} />
                    })
                }
                </div>
           
        </div>
    </>
  )
}

export default FeaturedProducts