import { useState,useEffect } from 'react'
import { Stack ,Box,Typography} from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchData } from '../utils/fetchFromAPI'

const Feed =() =>{
    const [ selectedCategory,setSelectedCategory ] =useState('New')
    const [videos ,setVideos] = useState([])
    useEffect(() => {
       fetchData(`search?part=snippet&q=${selectedCategory}`).then( data=>  setVideos(data?.items))
    }, [selectedCategory])
    
    return(
        <Stack sx={{ flexDirection: {sx: 'column',md:"row"}}}>
            <Box sx={{ height:{sx:"auto", md:'92vh'}, borderRight:'19x solid #3d3d3d' , px: {sx:0, md:2 }}}>
                <Sidebar {...{selectedCategory,setSelectedCategory}} />
                <Typography className='copyright' varient="body2" sx={{ mt:1.5, color: '#fff'}}>
                    copyright 2022 AKZ media
                </Typography>
            </Box>
            <Box p={2} sx={{overflowY:'auto'  ,height:"90vh", flex:2 }} >
                <Typography varient='h4' fontWeight="bold" mb={2} sx={{color:'white'}}  >
                    {selectedCategory} <span style={{color:'#F31503'}} >videos</span>
                </Typography> 
                <Videos  videos ={videos}/>
            </Box>
        </Stack>
    )
}

export default Feed