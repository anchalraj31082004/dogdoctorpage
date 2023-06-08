import {FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-evenly bg-black text-white py-12'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-2xl'>ABOUT</h4>
        <ul className='flex flex-col gap-3'>
            <li>History</li>
            <li>Our Team</li>
            <li> Brand Guidelines</li>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='text-2xl'>SERVICES</h4>
        <ul className='flex flex-col gap-3'>
            <li>How to Order</li>
            <li>Our Product</li>
            <li>Our Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
        </ul>
      </div>
      <div className='flex flex-col gap-8'>
        <h4 className='text-2xl'>TITLE HERE</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='flex'>
            <input className='px-5 py-2 placeholder-white bg-[#fcc302]' type="text" name='name' placeholder='Search' />
            <div className='px-4 py-2 bg-[#00bec9]'>
            <FaTelegram className='text-white text-2xl' />
            </div>
        </div>
        <div className='flex justify-around text-3xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter/>
            <FaWhatsapp />
          </div>
      </div>
    </div>
  )
}

export default Footer
