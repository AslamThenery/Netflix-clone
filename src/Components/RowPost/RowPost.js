import React, { useEffect, useState } from 'react'
import axios from '../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'
function RowPost() {
const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) =>{

            console.log(response.data.results)
            setImage(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>Netflix originals</h2>
            <div className='posters'>
                {
                    image.map((obj) => <img className='poster' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />)
                }
               
               
            </div>
        </div>
    )
}

export default RowPost
