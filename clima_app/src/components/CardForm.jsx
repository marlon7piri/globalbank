import React, { useEffect } from 'react'

function CardForm({adds,setAdds}) {


  

  
  return (
    <div className='flex justify-center items-center gap-4 mt-10'>
{adds.map((e)=>{
  return(
    <div className='bg-sky-300 rounded-md p-4 text-center w-max'>
      <p className='text-2xl text-gray-900'>{e.nombre}</p>
      <p className='text-2xl text-gray-900'>{e.fecha_nacimiento}</p>
      <p className='text-2xl text-gray-900'>{e.nota}</p>
    </div>
  )
})}
    
      
    </div>
  )
}

export default CardForm