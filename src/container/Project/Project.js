import React,{useEffect, useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Project.scss'

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y:0, opacity:1});
  const [works, setWorks] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  // fetch the data from DB
  useEffect(()=>{
    const query = '*[_type == "projects"]';

    client.fetch(query)
      .then((data)=>{
        setWorks(data);
        setFilterProject(data);
      })
  },[])
  const handelWorkFilter = (item) =>{
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);;
    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}]);

      if(item === 'All'){
        setFilterProject(works);;
      }else{
        setFilterProject(works.filter((work) => work.tags.includes(item)));
      }
    },500)
    console.log(filterProject, 'setFilterProject')
  }

  return (
    <>
      <h2 className="head-text">My <span>Project</span> Section </h2>

      <div className="app__peoject-filter">
        {['All','Web App', 'React JS', 'Angular JS'].map((item, index)=>(
          <div key={index} onClick={ ()=> handelWorkFilter(item) } className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'items-active' : ''}`} >
            {item}
          </div>
        ))}
      </div>

      <motion.div 
        animate={animateCard}
        transition={{ duration:0.5, delayChildren:0.5 }}
        className='app__project-portfolio'
      >
        { filterProject.length > 0 ?
        filterProject.map((works, index)=>(
          <div className="app__project-item app__flex" key={index}>
              <div className="app__project-img app__flex">
                <img src={urlFor(works.imgUrl)} alt={works.name} />

                <motion.div 
                  whileHover={{opacity:[0,1]}}
                  transition={{duration:0.25, staggerChildren:0.5, ease:'easeInOut'}}
                  className='app_project-hover app__flex'
                >
                  <a href={works.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div 
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale:[1,0.9]}}
                      transition={{duration:0.25, staggerChildren:0.5, ease:'easeInOut'}}
                      className='app__flex'
                    >
                    <AiFillEye/>
                    </motion.div>
                  </a>

                  <a href={works.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div 
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale:[1,0.9]}}
                      transition={{duration:0.25, staggerChildren:0.5, ease:'easeInOut'}}
                      className='app__flex'
                    >
                    <AiFillGithub/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__project-content app__flex">
                <h4 className="bold-text"> {works.title} </h4>
                <p className="p-text" style={{matginTop:10}}> 
                {
                  works.description
                 } </p>

                <div className="app__project-tag app__flex">
                  <p className="p-text"> {works.tags[0]} </p>
                </div>
              </div>
          </div>
        )) :
        <div className="app__project-soon app__flex">
        <h2 className="head-text">Comming  <span>Soon..</span></h2>
      </div>  
      }
      </motion.div>
    </>
  )
}

export default AppWrap(Project, 'project')