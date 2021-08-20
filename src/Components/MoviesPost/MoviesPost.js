import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { imageUrl} from '../../constants/constants'

import './MoviesPost.css'
function MoviesPost(props) {
const [image, setImage] = useState([])
// const [key, setkey] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) =>{

            // console.log(response.data.results)
            // console.log(response.data.results[0].id)

            setImage(response.data.results)
        })
    }, [])
   
      const imageVideo = (id) => {
          console.log("The id is:");
          console.log(id);
          axios.get(props.url).then((response) => {
              
        //   console.log("data is :");
        //   console.log(response.data.results[0].key);
        //   setkey(response.data.results[0])
          window.open(`https://www.youtube.com/watch?v=${response.data.results[0].key}`)
          })

        
        
      }
    return (
        <div className='movie-row' >
            <h2>{props.title }</h2>
            <div className='posters'>
         

            {
                    
                    image.map((obj) => <a > <img onClick = { ()=>{imageVideo(obj.id)}} className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                    {/* <button className="trailer-btn">Watch Trailer</button> */}
                    </a> )
                }
       
                
               
            </div>
            
        
        </div>
    )
}


export default MoviesPost

