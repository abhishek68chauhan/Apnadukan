import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='relative div1' id='box'>
          <img src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Header" className="w-full h-full object-cover" />
          <div className='absolute inset-0 mx-10 gap-80 flex text-lg'>
            <a >Account</a>
            <a>My Cart</a>
            <a>Contact us</a>
          </div>
          <div className="absolute inset-0 items-center justify-center flex">
            <h1 className='gradient-text text-6xl font-bold'>Welcome to Our Store</h1>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        <div className='' id='box1'>
          <div className='text-center'>Prize-: 100 Rs
            <img id='img-box1' src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>
        <div id='box2'>
          <div className='text-center'>Prize-: 350 Rs
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>
        <div id='box3'>
          <div className='text-center'>Prize-: 250 Rs
            <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>
        <div id='box4'>
          <div className='text-center'>Prize-: 525 Rs
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box5'>
          <div className='text-center'>Prize-: 1200 Rs
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
        </div>
        <div id='box6'>
          <div className='text-center'>Prize-: 415 Rs
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box7'>
          <div className='text-center'>Prize-: 720 Rs
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box8'>
          <div className='text-center'>Prize-: 1200 Rs
            <img src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box9'>
          <div className='text-center'>Prize-: 312 Rs
            <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box10'>
          <div className='text-center'>Prize-: 920 Rs
            <img src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D " />
          </div>
        </div>
        <div id='box11'>
          <div className='text-center'>Prize-: 475 Rs
            <img src="https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box12'>
          <div className='text-center'>Prize-: 11000 Rs
            <img src="https://images.unsplash.com/photo-1571380401583-72ca84994796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box13'>
          <div className='text-center'>Prize-: 1025 Rs
            <img src="https://images.unsplash.com/photo-1555487505-8603a1a69755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
          </div>
        </div>
        <div id='box14'>
          <div className='text-center'>Prize-: 3000 Rs
            <img src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwcm9kdWN0fGVufDB8fDB8fHww%3D" />
          </div>
        </div>
      </div>
      <footer className=''>
        <div className=''>
          <div className=' bg-blue-300 flex justify-around py-2 pb-10 gap-20 flex-wrap '>
            <div className='flex flex-col items-start'>
              <h4 className='text-blue-900 font-extrabold'>ApnaBazaar</h4>
              <p>Shop fast, save more, live better</p>
            </div>
            <div className='flex flex-col items-start'>
              <h4 className='text-blue-900 font-extrabold'>Services</h4>
              <p>About</p>
              <p>Return Policy</p>
              <p>Customer service</p>
            </div>
            <div className='flex flex-col items-start'>
              <h4 className='text-blue-900 font-extrabold'>Useful Links</h4>
              <p>Sitemap</p>
              <p>Shipping Rate</p>
              <p>Affililat Program</p>
            </div>
            <div className='flex flex-col items-start'>
              <h4 className='text-blue-900 font-extrabold'>Contact</h4>
              <p>Address</p>
              <p>Email : example@email.com</p>
              <p>Phone : +1 234 567 890</p>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default App
