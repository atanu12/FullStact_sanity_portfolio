import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF, FaGithub, FaLinkedinIn} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* <div> <a href="https://twitter.com/bindas_bapi_" target='_blank'> <BsTwitter/>  </a>  </div> */}
        <div> <a href="https://www.instagram.com/atanu_mondal_30/" target='_blank'> <BsInstagram/>  </a>  </div>
        <div> <a href="https://www.facebook.com/atanumondal30/" target='_blank'> <FaFacebookF  />  </a>  </div>
        <div> <a href="https://github.com/atanu12" target='_blank'> <FaGithub  />  </a>  </div>
        <div> <a href="https://www.linkedin.com/in/atanu-mondal30/" target='_blank'> <FaLinkedinIn  />  </a>  </div>
    </div>
  )
}

export default SocialMedia