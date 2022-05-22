import React from 'react'
import {SocialMedia,NavigationDots} from '../components'


const AppWrap = (Componect, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container  ${classNames}`} >
        <SocialMedia/>
        <div className="app__wrapper  app__flex">
            <Componect/>

            <div className="copyright">
                <p className='p-text' > @2022 ATANU </p>
                <p className='p-text' > All rights reserved </p>
            </div>
        </div>
            <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap