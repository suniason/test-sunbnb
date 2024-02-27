import React, { ComponentProps } from 'react'

interface HiProps{
    greeting:string;
}

const HiComponent:React.FC<HiProps>= (props:{greeting:string}) => {
return (
<div className='bg-cyan-300 p-10 rounded-lg'>
    <p className='text-2xl text-white font-bold'>{props.greeting}</p>
</div>
)
}

export default HiComponent
