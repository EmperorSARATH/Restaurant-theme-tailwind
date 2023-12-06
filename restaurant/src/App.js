
import './App.css';
import './index.css';
import Burger1 from './Burger.jpg'
import Pizza1 from './Pizza.jpg'
import Biriyani1 from './Biriyani.jpg'
import Burger3 from './Burger3.jpg'
import Pizza2 from './Pizza2.jpg'
import Juice1 from './Juice.jpg';
import Logo from './Logo.png';

import { useState } from 'react';
import Chef from './Cheff';

function App() {

  const Burger=[
     {name:"Veg Burger",
      price:100},

     { name:"Chicken burger",
      price:130},
      {name:"Special Burger",
      price:150}
    ];
   const Pizza=[
        {name:"Veg Pizza",
          price:200},
        {name:"Chicken Pizza",
          price:250},
      {name:"Pineappple Pizza",
      price:230}
    ];

   const Biriyani=[
        {name:"Veg Biriyani",
          price:110},
        {name:"Chicken Biriyani",
          price:140},
      {name:"Mix Biryani",
      price:140}
    ];

  const Juice=[
      {name: "Orange Juice",
        price: 50},
    {name: "Pineapple Juice",
      price:50},
    {name:"Watermelon Juice",
      price:50},
  ]



 const  [Image, setImage]=useState(Burger3);
const [item, setItem]=useState("Burger");



  function handleBurgerClick(){
    setImage(Burger3);
    setItem("Burger")
      
  }

  function handlePizzaClick(){
  setImage(Pizza2);
  setItem("Pizza");
  }

  function handleBiriyaniClick(){
  setImage(Biriyani1) 
  setItem("Biriyani");
  }

  function handleJuiceclick(){
  setImage(Juice1);

  setItem("Juice");
  }


  return (
    <div>
    <div className=" Header-Main h-16 flex justify-between items-center">

      <h1 className='font-bold ml-5 text-white' >Menu</h1>
      <h1 className='text-white text-3xl' >Restaurant Website</h1>
        <img src={Logo} className="w-12 h-15 mr-3 rounded-3xl"/>
          </div>

      <div className='Body  relative h-1/6 ' >
        <div className='Welcome absolute mt-44 ml-10 p-5 ' >
        <h1 className='text-white font-bold text-7xl opacity-100'>
          Welcome to our Restaurant
        </h1>
          <h3 className='text-white text-3xl opacity-100'>Choose your fav food at your leisure</h3>
        </div>
        <img src='https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='object-cover h-1/6 w-full' />
      </div>
      <div className='Menu flex-row'>

      <div className='Body2 bg-white flex justify-center'>
        <h1 className='text-3xl mt-5'> -------- </h1>
      <h1 className='font-bold text-4xl mt-5'>Menu Item</h1> 
        <h1 className='text-3xl mt-5'>-------</h1>
      </div>

        <h1 className='flex justify-center mt-5 text-3xl'>Palette of your choice</h1>

        <div className='Menu-Card  flex justify-center mt-10 '>
          <img src={Burger1} className='Burger mr-10 object-cover  w-40' onClick={handleBurgerClick}/>
          <img src={Pizza2} className="Pizza mr-10 object-cover w-40" onClick={handlePizzaClick} /> 
          <img src={Biriyani1} className='Biriyani mr-10 w-40' onClick={handleBiriyaniClick}/>

          <img src={Juice1} className='Juice mr-10 w-40' onClick={handleJuiceclick} />

        </div>

        <div className='Item-Card flex justify-center mt-7 mb-3'>
          <img src={Image} className='w-96 h-80' id='ImageSetter' />
          <div className='Description items-center w-60 bg-stone-300'>
          <h1 className='Header flex justify-center mb-3 mt-3 font-serif'>Menu</h1>
          <div >
              {item === "Pizza" ? Pizza.map((i)=>(
                  <div  className='Menu-List grid  grid-cols-3 gap-1'>
                 <h1 className='ml-4 mb-3 font-serif'>{i.name}</h1>
            <p className='ml-7'>:</p>
              <h1 className='ml-6 font-serif'>{i.price}/-</h1>
                </div>
              
              )) : item === "Biriyani" ? (
                Biriyani.map((i)=>(
                  <div  className='Menu-List grid  grid-cols-3 gap-1'>
                 <h1 className='ml-3 mb-3 font-serif'>{i.name}</h1>
                      <p>:</p>

                         <h1 className='font-serif'>{i.price}/-</h1>
                </div>   
              ) 
                  ) 
                ) : item === "Burger" ? Burger.map((i)=>(
                  <div  className='Menu-List grid  grid-cols-3 gap-1'>
                 <h1 className='ml-3 mb-3 font-serif'>{i.name}</h1>
            <p >:</p>
              <h1 className='font-serif'>{i.price}/-</h1>
                </div>
              
              )) : item === "Juice" ?  Juice.map((i)=>(
                  <div  className='Menu-List grid  grid-cols-3 gap-1'>
                 <h1 className='ml-3 mb-3 font-serif'>{i.name}</h1>
                  <p className='ml-7'>:</p>
              <h1 className='ml-3 font-serif'>{i.price}/-</h1>
                </div>
  
                )):[]
              } 

         
          </div>

          </div>
        </div>
        <Chef/>
      </div>
    </div>
  );
}
export default App;
