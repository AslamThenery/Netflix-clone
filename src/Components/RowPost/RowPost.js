import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {imageUrl} from '../../constants/constants'
import './RowPost.css'
function RowPost(props) {
const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) =>{

            console.log(response.data.results)
            setImage(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title }</h2>
            <div className='posters'>
                {
                    image.map((obj) => <img className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />)
                }
               
               
            </div>
        </div>
    )
}

export default RowPost
