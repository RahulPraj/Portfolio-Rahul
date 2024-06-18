import React from 'react'
import Header from '../../components/Header'
import About from './About'
import Intro from './Intro'
import Skill from './Skill'



function Index() {
  return (
    <div className=''>
        <Header/>
        <div className='bg-bgLight px-40 sm:px-5'>
          <Intro/>
          <About/>
          <Skill/>
        </div>
        
    </div>
  )
}

export default Index