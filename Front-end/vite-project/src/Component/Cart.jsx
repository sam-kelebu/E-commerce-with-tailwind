import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function Cart() {
  return (
 <div className='mx-[100px] my-10' >

    {/* Top Section */}
    <div>
        <h1 className='font-bold text-xl' >Your Cart</h1>
        <p>Now read to checkout ? Coninue Shopping</p>
    </div>


    {/* Bottom Section */}
    <div className='flex gap-12  max-md:flex-col'>

        {/* Left Section */}
        <div  className='w-[50%] max-md:w-full flex flex-col gap-[10%]'>
            {/* Items 1 */}
            <div className='flex gap-6 items-center'>
                <div   className='w-[200px] h-[200px] bg-black'  >

                <img src="honey.jpg" alt="" className='w-[200px] h-[200px]' />

                </div>

                <div className='w-[80%]'>
                    <h1 className='font-bold text-xl' >
                        Natural Honey Bottle
                    </h1>
                    <span> Size L</span>

                    <div className='flex justify-between items-center' >
                            <span>Quantity 1</span>
                            <span>Vendor Name</span>
                    </div>
                    

                    <div className='flex justify-between items-center' >
                            <h1 className='font-bold text-xl' >
                                $99
                            </h1>


                            <span>                            Remove
                            </span>

                    </div>
                    
                </div>

            </div>

            <hr />

            {/* Seccond Item */}

            <div className='flex gap-6 items-center'>
                <div   className='w-[200px] h-[200px] bg-black'  >

                <img src="honey.jpg" alt="" className='w-[200px] h-[200px]' />

                </div>

                <div className='w-[80%]'>
                    <h1 className='font-bold text-xl' >
                        Natural Honey Bottle
                    </h1>
                    <span> Size L</span>

                    <div className='flex justify-between items-center' >
                            <span>Quantity 1</span>
                            <span>Vendor Name</span>
                    </div>
                    

                    <div className='flex justify-between items-center' >
                            <h1 className='font-bold text-xl' >
                                $99
                            </h1>


                            <span>                            Remove
                            </span>

                    </div>
                    
                </div>

            </div>


        </div>


        {/* Right Section */}
        <div className='w-[50%] max-md:w-full flex flex-col h-[100px'>

            <div className='flex justify-between' >
                <span>Subtotal</span>
                <span>120</span>
            </div>

            <div className='flex justify-between' >
                <span>Shipping</span>
                <span>Calculated at the next step</span>

                <hr />

                <div className='flex justify-between' >
              
            </div>

            <div className='flex justify-between'>
            <span>Total</span>
                <span>120</span>
            </div>

            
            </div>


            <button className='px-12 font-bold text-white mt-[30px] py-4 bg-red-700'>Continue to checkout</button>


            

        </div>


    </div>

 </div> 
  )
}

export default Cart;
