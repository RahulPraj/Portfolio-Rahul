import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Resume from '../../assets/PDF/Rahul Prajapati_CV.pdf';
import Images from '../../assets/Images/Image';

function Intro() {
  return (
    <div className='h-[85vh] bg-bgLight flex flex-row items-center w-full intro-box sm:h-svh'>
       <div className='w-3/5 sm:pt-5 sm:w-10/12  pt-10 gap-8'>
         <h1 className='text-text_primary text-3xl sm:text-1xl pb-2'>Hi, I am</h1>
        <h1 className='text-text_primary text-7xl sm:text-4xl pb-2 font-semibold'>Rahul Prajapati</h1>
        <div className='pb-2'>
          <span className='text-text text-3xl sm:text-1xl font-bold font-title mx-1 '>I am a</span>
          <TypeAnimation style={{ color: '#854ce6' }}
            sequence={[
              " Programmer",
              1000,
              " Full Stack Developer",
              1000
            ]}
            wrapper='span'
            speed={30}
            className='text-text4 text-4xl sm:text-4xl font-bold sm:font-semibold'
            repeat={Infinity}
          />
        </div>
        <p className='text-text_primary1 text-xl w-11/12 font-sans'>I am a motivated and versatile individual, always eager to take new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
        <button className='resumeButton'><Link to={Resume} target='_blank' download>Download Resume</Link></button>
        
       </div>
       <div className='heroImage w-1/2  pt-15  '>
          <img className='' src={Images.image1} alt="" />
        </div>
        
    </div>
  )
}

export default Intro