import React from 'react'
import '../styles/productlist.css';

const UserList = ({ productList }) => {
    return (
        <>
            {productList.products && productList.products.map((product) => {
                return (
                    <div className='container' key={product.id}>
                        <img src={product.images} alt="" />
                        <div className='productDes'>
                            <h1>{product.brand}</h1>
                            <p>{product.category}</p>
                            <p>{product.description}</p>
                            <div>
                                <p>{product.price}</p>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default UserList