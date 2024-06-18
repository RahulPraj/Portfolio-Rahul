import React from "react"
import SectionTitle from "../../components/SectionTitle"

function About() {
  return (
    <div className=" bg-bgLight">
      <SectionTitle title= 'About'/>
      <div className="flex w-full items-center">
        <div className="h-[60vh] w-1/2 ">
        <lottie-player src="https://lottie.host/ba79e42b-7547-4156-854f-528883068439/DTK2jmp8Sv.json" background="##fff" speed="1" loop  autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
           <p className="text-white">
            Hello! I'm thrilled to welcome you to my portfolio, a space where I fuse passion with proficiency in the realm of development. My name is Rahul Prajapati. I enjoy creating things that live 
            on the internet. My interest in web development started back in 2020. 
           </p>
           <p className="text-white">My journey into the world of development was sparked by 
           an innate curiosity and a relentless drive to create. From tinkering with basic code
            snippets to crafting intricate digital solutions, each step has been an exhilarating 
            exploration of endless possibilities. Join me as I share my experiences, projects, 
            and the evolution of my passion for development. Together, let's embark on a journey 
            where innovation knows no bounds and where every line of code tells a story of growth and achievement.
             Welcome, and enjoy the ride!</p>
        </div>
      </div>
    </div>
  )
}

export default About