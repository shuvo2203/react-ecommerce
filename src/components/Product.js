import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatePrice from '../helper/FormatePrice';

const Product = (curElem) => {

    const { id, name, image, price, category } = curElem;

    return (
        <>
         <div className='card'>
         <div className='card-body'>
                <NavLink to={`/singleproduct/${id}`}>
                    <figure>
                        <img src={image} alt={name} className='feature-img' />
                        <figcaption>{category}</figcaption>
                    </figure>
                    <div className='card-data'>
                        <p><strong>{name}</strong></p>
                        <p>{<FormatePrice price={price} />}</p>
                    </div>
                </NavLink>
                </div>
          </div>
        </>
    )
}

export default Product;