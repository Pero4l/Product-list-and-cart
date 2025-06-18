
import './index.css'
import firstImg from "./assets/illustration-empty-cart.svg"

function App() {

  return (
  <div className='flex justify-between p-20 px-[258px] '>
    <h1 className='text-4xl font-bold'>Desserts</h1>

    <div className='bg-white w-[400px] rounded-xl'>
  <p className='text-red-700 text-2xl font-semibold p-6'>Your Cart (0)</p>
  <div className="flex justify-center">
    <img className='p-5' src={firstImg} alt="" />
  </div>
  <p className='text-red-900 text-center pb-10'>Your added items will appear here</p>
</div>
  </div>
 
  )
}

export default App
