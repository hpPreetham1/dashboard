import React from 'react'
import Style from "./Fourth.module.css"

const Fourth = () => {
  return (
   <div className={Style.fourth_section}>
    <div className={Style.header}>
       <div className={Style.header_left}>
        <h4>Product Sell</h4>
       </div>
       <div className={Style.header_right}>
        <input type="text" placeholder='Search' />
        <select name="" id="">
            <option value="">Last 30 days</option>
        </select>
       </div>
    </div>
    <div className={Style.products_header}>
        <div className={Style.product_name}>
            <h4>Product Name</h4>
        </div>
        <div className={Style.product_details}>
            <ul>
            <li>Stock</li>
            <li>Price</li>
            <li>Total Sales</li>
            </ul>
        </div>
    </div>
    <hr />
    <div className={Style.product_cards}>
    <div className={Style.products}>
       <div className={Style.product_name_deatils}>
               <img src="data:image/jpeg;base64,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" alt="" />
               <h6>Products </h6>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
           </div>
           <div className={Style.product_details}>
               <ul>
               <li> 32 in Stock</li>
               <li>$ 45.99</li>
               <li>20</li>
               </ul>
           </div>
       </div>
       <div className={Style.products}>
       <div className={Style.product_name_deatils}>
               <img src="data:image/jpeg;base64,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" alt="" />
               <h6>Product Name</h6>
           </div>
           <div className={Style.product_details}>
               <ul>
               <li>30 in Stock</li>
               <li>$ 45.96</li>
               <li>39</li>
               </ul>
           </div>
       </div>
</div>
 

   </div>
  )
} 

export default Fourth