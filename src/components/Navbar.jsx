import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='bg-[#daac00] flex justify-between px-24 items-center text-center py-3'>
      <div>
        <img src="/assets/logo.png" alt="" />
      </div>
      <div>
        <ul className='flex justify-between gap-14 text-white list-none'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>CONTACT</li>
        </ul>
      </div>
      <div className='flex'>
        <input className='px-5 py-2 placeholder-white bg-[#fcc302]' type="text" name='name' placeholder='Search' />
        <div className='px-4 py-2 bg-[#00bec9]'>
        <BiSearch className='text-white' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
