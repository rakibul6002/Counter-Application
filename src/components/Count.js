'use client'
import React, { useState } from 'react';

const Count = () => {
    const [count, setCount]= useState(0);
        const add = () =>{
            setCount(count + 1);
        };
        const minus = () =>{
            if(count === 0){
                setCount(0);
            }
            else{
                setCount(count - 1)
            }
        };
        const reset = () =>{
            setCount(0);
        };


  return (
    <div className='Image w-full min-h-screen'>
        <div className='flex items-center justify-center h-full'>
            <p className='my-20 text-4xl text-gray-200' >Counter Application</p>
        </div>
        <div className='flex items-center justify-center mt-4'>
            <div className='bg-gray-600 w-[300px] h-[100px] rounded border'>
                <p className='flex items-center justify-center mt-8 text-4xl'>{count}</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-8 gap-8 '>
            <button onClick={minus}><p className=' rounded border bg-red-700 w-[130px] h-[50px] text-4xl pt-1'>Minus</p></button>

            <button onClick={add}><p className=' border rounded bg-green-500 w-[130px] h-[50px] text-4xl pt-1'>Add</p></button>
        </div>
        <div className='flex items-center justify-center mt-8 gap-8'>
            <button onClick={reset}><p className=' border rounded bg-gray-950 text-gray-300 w-[290px] h-[50px] text-4xl pt-1'>Reset</p></button>
        </div>

    </div>
  )
}

export default Count