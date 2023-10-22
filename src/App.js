import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

import './App.css';
import { useState } from 'react';

function App() {
//js CODE
const [Interest,setInterest] =useState(0)
const [Principle,setPrinciple]=useState(0)
const [Rate,setRate]=useState(0)
const [Year,setYear]=useState(0)
const [isPrinciple,setIsPrinciple]=useState(true)
const [isRate,setIsRate]=useState(true)
const [isYear,setIsYear]=useState(true)
const validate=(e)=>{
  const {name,value}=e.target
 /*  console.log(name,value); */
/*  console.log(!!value.match(/^[0-9]+$/)); */
 if(!!value.match(/^[0-9]*.?[0-9]+$/)){ //-to convert into boolean value
if(name==='principle'){
  setPrinciple(value)
  setIsPrinciple(true)
 }
 else if(name==='rate'){
  setRate (value)
  setIsRate(true)
 }
 else {
  setYear (value)
  setIsYear(true)
 }
}


 else{

  if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(false)
   }
   else if(name==='rate'){
    setRate (value)
    setIsRate(false)
   }
   else {
    setYear (value)
    setIsYear(false)
   }
  }
}
const handleCalculate=(e)=>{
  e.preventDefault()
  if(!Principle || !Rate || !Year){
   alert('Please fill the form');

  }
  else{
/* alert('Submited'); */
setInterest(Principle*Rate*Year/100)
  }
  
}
const handleReset=(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(0)
  setIsRate(0)
  setIsYear(0)
}
  return (
    //jsx part 
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
 <div style={{width:'500px',}} className='bg-light p-5 rounded '>  
  <h1>simple interest</h1>
  <p>calculate your Simple Interest Easily</p>
  <div style={{height:"150px"}} className="flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 bg-grey rounded">
   <h1>₹{' '}{Interest}</h1>
   <p>total simple interest</p>
   </div>
   <form  className='mt-5' onSubmit={handleCalculate}>
    <div className='mb-3'>
    <TextField name='principle' className='w-100' value={Principle || ''}  onChange={(e)=>validate(e)} id="outlined-basic" label="₹Principle Amount" variant="outlined" />
    </div>
    {!isPrinciple &&
    <div>
      <p className='text-danger mb-3'> invalid input</p>
    </div>
}
   
    <div className='mb-3'>
    <TextField name='rate' className='w-100' value={Rate || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" />

    {!isRate &&
    <div>
      <p className='text-danger mb-3'> invalid input</p>
    </div>
}
    </div>
    <div className='mb-3'>
    <TextField name='year' className='w-100' value={Year  || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />

    {!isYear &&
    <div>
      <p className='text-danger mb-3'> invalid input</p>
    </div>
}
    </div>

<div className='mt-4'>
<Stack direction="row" spacing={2}>
<Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:"200px",height:"50px"}} variant="contained">Calculate</Button>
<Button onClick={handleReset} className='bg-primary ' style={{width:"200px",height:"50px" ,color:"white"}}  variant="outlined">Reset</Button>
</Stack>
</div>

   </form>

 </div>
   </div>
  );
}

export default App;
