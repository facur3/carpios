'use client'

import Image from "next/image"

const CartModal = () => {

    //TEMPORARY
    const cartItems = true;


    return (
        <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div className="">Cart is empty</div>
            ) : (
                <div className="">
                    <Image src='https://images.pexels.com/photos/30649019/pexels-photo-30649019/free-photo-of-helado-de-vainilla-servido-en-vaso-sobre-fondo-rojo-brillante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={72} height={96} className="object-cover rounded-md"/>
                    <div className="">
                        {/* TOP */}
                        <div className="">
                        {/* TITLE */}
                        <div className="">
                            <h3>Product Name</h3>
                            <div className="">$49</div>
                        </div>
                        {/* DESC */}
                        <div className="">
                            available
                        </div>
                        </div>
                        {/* BOTTOM */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartModal