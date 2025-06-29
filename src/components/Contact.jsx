
import { Contact_Us } from '../constraints'

function Contact() {
  return (
    <div className='border-b border-neutral-800 pb-4 mb-2'>
        <h1 className='my-10 text-center text-4xl'>Contact Us</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{Contact_Us.address}</p>
            <p className='my-4'>{Contact_Us.phone}</p>
            <a href='#' className='border-b'>{Contact_Us.email} </a>
        </div>
    </div>
  )
}

export default Contact
