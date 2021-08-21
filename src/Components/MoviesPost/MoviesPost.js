import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { imageUrl} from '../../constants/constants'

import './MoviesPost.css'
function MoviesPost(props) {
const [image, setImage] = useState([])
// const [key, setkey] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) =>{
console.log("path is ");
            console.log(response.data.results.backdrop_path)
            

            let images = response.data.results

            images.map((images)=>{if(images.backdrop_path){setImage(response.data.results)}
        return images
        })
            
        })
    })
   
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
                   
                    image.map((obj) =>  <img onClick = { ()=>{imageVideo(obj.id)}} className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                  
                     )
                     
                }
       
                
               
            </div>
            
        
        </div>
    )
}


export default MoviesPost

