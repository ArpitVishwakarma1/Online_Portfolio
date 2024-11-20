import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Portfolio"
          des=" Dynamic portfolio showcasing my creative projects and expertise in Web Development. Explore my work, skills, education, experience and achievements in a visually engaging and user-friendly interface"
          src={projectOne} gitlink={"https://github.com/ArpitVishwakarma1/myPersonalPortfolio"} deploylink={"http://my-personal-portfolio-inky.vercel.app"}
        />
        <ProjectsCard
          title="Shopping Portal: Shopify"
          des=" Developed a responsive e-commerce website with features like product browsing, secure payment integration, and order tracking for a seamless user experience. Focused on intuitive design and scalability, showcasing expertise in Web development."
          src={projectTwo} gitlink={"https://github.com/ArpitVishwakarma1/eshoppingwesite"} deploylink={"https://eshoppingwesite.vercel.app/"}
        />
        <ProjectsCard
          title="Bank Management System"
          des="Developed a comprehensive Bank Management System to streamline operations such as account management, transaction processing, and customer service. Focused on efficiency, security, and user-friendly design to enhance banking experiences."
          src={projectThree} gitlink={"https://github.com/ArpitVishwakarma1/Bank-Management-System"} deploylink={"https://web-chat-app-bui7.vercel.app/"}
        />
       
         
      
       
      </div>
    </section>
  );
}

export default Projects
