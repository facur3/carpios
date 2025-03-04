import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
    return (
        <div className='px-4 overflow-x-scroll'>
            <div className="flex gap-4 md:gap-8">
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/14269708/pexels-photo-14269708.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/9589455/pexels-photo-9589455.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/9477627/pexels-photo-9477627.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/30825014/pexels-photo-30825014.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/29989219/pexels-photo-29989219/free-photo-of-arrozal-en-bali.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/29213238/pexels-photo-29213238.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/30847375/pexels-photo-30847375/free-photo-of-hombre-elegante-caminando-por-una-pared-de-ladrillos-al-atardecer.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
                <Link href='/list?cat=test' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src='https://images.pexels.com/photos/30122029/pexels-photo-30122029.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill sizes='20vw' className="object-cover"/>
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList