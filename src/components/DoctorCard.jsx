import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const DoctorCard = (props) =>  {
    return (
      <div className='flex flex-col items-center max-w-xs gap-2 text-black'>
        <div>
          <img src={`/assets/${props.img}`}alt="" />
        </div>
        <div className='gap-3 flex flex-col'>
          <h4 className='text-2xl mt-3 '>{props.text}</h4>
          <p className=' font-light text-xl'>VETERINARY</p>
          <div className='flex justify-around'>
            <FaFacebook className='  fill-yellow-500 text-3xl' />
            <FaInstagram className='  fill-yellow-500 text-3xl' />
            <FaTwitter className='  fill-yellow-500 text-3xl'/>
            <FaWhatsapp className='  fill-yellow-500 text-3xl' />
          </div>
        </div>
      </div>
    )
  }

export default DoctorCard
