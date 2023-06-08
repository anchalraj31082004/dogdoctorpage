import React from 'react'
import PostCard from './PostCard'

const Post = () =>  {
    return (
      <div className='flex flex-col h-screen        text-center text-black gap-12'>
            <div className=' mt-10 gap-8 flex flex-col px-72'>
            <h2 className='text-5xl font-semibold' >RECENT POST</h2>
            <h4 className='text-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam consequuntur harum, facilis debitis quas!</h4>
            </div>
            <div className='flex justify-evenly '>
            <PostCard img={`Lcard1.png`} date="June 06 2023" />
            <PostCard img={`Lcard2.png`} date="June 07 2023" />
            <PostCard img={`Lcard3.png`} date="June 08 2023" />
            </div>
      </div>
    )
  }

export default Post


