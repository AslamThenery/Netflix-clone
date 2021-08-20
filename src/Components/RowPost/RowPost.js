import React, { useEffect, useState } from 'react'
import axios from '../axios'
// import YouTube from 'react-youtube'
import { imageUrl} from '../../constants/constants'

import './RowPost.css'
function RowPost(props) {
const [image, setImage] = useState([])
// const [key, setkey] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) =>{

            // console.log(response.data.results)
            // console.log(response.data.results[0].id)

            setImage(response.data.results)
        })
    })
    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 0,
    //     },
    //   };

      const imageVideo = (id) => {
          console.log("The id is:");
          console.log(id);
          axios.get(props.url).then((response) => {
              
        //   console.log("data is :");
        //   console.log(response.data.results[0].key);
        //   setkey(response.data.results[0])
          window.open(`https://www.youtube.com/watch?v=${response.data.results[0].key}`)
          })

        
        // <a href="href={`https://www.youtube.com/watch?v=${key.key}`}"></a>
      }
    return (
        <div className='row' >
            <h2>{props.title }</h2>
            <div className='posters'>
         

            {
                    
                    image.map((obj) =>  <img onClick = { ()=>{imageVideo(obj.id)}} className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />)
                }
       
                
               
            </div>
            
            {/* <div >
            {key.key ? <YouTube videoId={key.key} opts={opts} />  : }

            </div> */}
        </div>
    )
}


export default RowPost
