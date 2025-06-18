import cake from "./../assets/image-cake-desktop.jpg"
import brownie from "./../assets/image-brownie-desktop.jpg"
import panna from "./../assets/image-panna-cotta-desktop.jpg"
import cart from "./../assets/icon-add-to-cart.svg"

function Third(){

    return(
        
        <div className="flex gap-9 relative left-64 bottom-[200px] ">
        
                   <div>
                    <img className="rounded-xl w-[300px] " src={cake} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Cake</p>
                        <p className="font-semibold text-2xl">Red Velvet Cake</p>
                        <p className="font-semibold text-2xl text-red-800">$4.50</p>
                    </div>
                   </div>
        
                   {/*  */}
        
                   <div>
                    <img className="rounded-xl w-[300px]" src={brownie} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Brownie</p>
                        <p className="font-semibold text-2xl">Salted Caramel Brownie</p>
                        <p className="font-semibold text-2xl text-red-800">$5.50</p>
                    </div>
                   </div>
        
                   {/*  */}
        
                   <div>
                    <img className="rounded-xl w-[300px]" src={panna} alt="" />
        
                    <div className="flex gap-4 bg-white w-fit p-3 px-8 rounded-full border border-red-900 relative left-12 bottom-6">
                        <img className="w-7" src={cart} alt="" /> 
                        <span className="font-semibold">Add to Cart</span>
                    </div>
        
                    <div className="leading-snug">
                        <p className="text-red-950">Panna Cotta</p>
                        <p className="font-semibold text-2xl">Vanilla Panna Cotta</p>
                        <p className="font-semibold text-2xl text-red-800">$5.00</p>
                    </div>
                   </div>
        
        
                </div>
    )
}

export default Third