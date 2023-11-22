import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate=useNavigate();

    const backToHome=()=>{
        navigate('/');
    }
  return (
    <div className='bg-purple'>
    <div className="stars">
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="img"/>
                <button onClick={backToHome} className="btn-go-home" >GO BACK HOME</button>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="img"/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="img"/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="img"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="img"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>      
    </div>
    </div>
  )
}

export default PageNotFound