import { useState,useEffect } from 'react'
import { Box,Typography} from '@mui/material'
import {Videos} from './'
import { fetchData } from '../utils/fetchFromAPI'
import {useParams} from 'react-router-dom'

const SearchFeed =() =>{
    const {searchTerm} =useParams()
    const [videos ,setVideos] = useState([])
    useEffect(() => {
       fetchData(`search?part=snippet&q=${searchTerm}`).then( data=> {
           setVideos(data?.items)
       })
    }, [searchTerm])
    console.log('search',searchTerm)
    return(
        <Box p={2} sx={{overflowY:'auto'  ,height:"90vh", flex:2 }} >
        <Typography varient='h4' fontWeight="bold" mb={2} sx={{color:'white'}}  >
            search result for <span style={{color:'#F31503'}} >{searchTerm}</span> videos
        </Typography> 
        <Videos  videos ={videos}/>
    </Box>
    )
}

export default SearchFeed