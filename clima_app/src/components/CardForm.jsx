import React, { useEffect } from 'react'

function CardForm({adds,setAdds}) {


  if(adds.length == 0){
    return <h1 className='text-center text-4xl text-gray-900'>No hay Notas</h1>
  }


  
  return (
    <div className='grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mt-10'>
{adds.map((e)=>{
  return(
    <div className='bg-gray-900 rounded-md p-4 text-center w-max flex flex-col justify-start' key={e.nombre}>
      <p className='text-2xl text-gray-50'>{e.nombre}</p>
      <p className='text-2xl text-gray-50'>{e.fecha_nacimiento}</p>
      <p className='text-2xl text-gray-50'>{e.nota}</p>
    </div>
  )
})}
    
      
    </div>
  )
}

export default CardForm