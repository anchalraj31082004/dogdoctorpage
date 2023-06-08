import React from 'react'

const PostCard = (props) => {
    return (
      <div className='flex flex-col items-center max-w-[250px] text-black shadow-slate-800  '>
        <div>
          <img src={`/assets/${props.img}`}alt="" />
        </div>
        <div className='gap-0 flex flex-col  border-2 '>
          <h4 className='text-2xl mt-2 '>As a Vaterinarian and Lover of Animal  </h4>
          <h6 className='text-[#00bec9]'>{props.date}</h6>
          <p className=' font-light text-xl mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h6 className='text-[#00bec9]'>Read More +</h6>
        </div>
      </div>
    )
  }

export default PostCard
