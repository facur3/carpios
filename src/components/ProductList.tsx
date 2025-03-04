import Link from 'next/link'
import Image from 'next/image'


const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30649019/pexels-photo-30649019/free-photo-of-helado-de-vainilla-servido-en-vaso-sobre-fondo-rojo-brillante.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/30535540/pexels-photo-30535540/free-photo-of-un-lado-de-la-vision-de-la-olla.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            {/* DUPLICATES */}
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/29697992/pexels-photo-29697992/free-photo-of-silueta-de-un-nino-caminando-hacia-el-mar-brumoso.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/30959946/pexels-photo-30959946/free-photo-of-escena-urbana-dinamica-en-tokio-japon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/29606793/pexels-photo-29606793/free-photo-of-techos-ornamentados-de-templos-tradicionales-chinos.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/21302584/pexels-photo-21302584/free-photo-of-primer-plano-de-violonchelo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/18540205/pexels-photo-18540205/free-photo-of-paisaje-montanas-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/30922282/pexels-photo-30922282/free-photo-of-deliciosas-donas-rellenas-de-crema-y-espolvoreadas-con-azucar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/9589455/pexels-photo-9589455.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/9477627/pexels-photo-9477627.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30825014/pexels-photo-30825014.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/29989219/pexels-photo-29989219/free-photo-of-arrozal-en-bali.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/30122029/pexels-photo-30122029.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/30847375/pexels-photo-30847375/free-photo-of-hombre-elegante-caminando-por-una-pared-de-ladrillos-al-atardecer.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='https://images.pexels.com/photos/29213238/pexels-photo-29213238.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                    <Image src='https://images.pexels.com/photos/30893002/pexels-photo-30893002.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$50</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-carpios text-carpios w-max py-2 px-4 text-xs hover:bg-carpios hover:text-white '>Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList

