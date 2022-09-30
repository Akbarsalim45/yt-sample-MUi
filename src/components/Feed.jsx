import { useState,useEffect } from 'react'
import { Stack ,Box,Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
const Feed =() =>{

    return(
        <Stack sx={{ flexDirection: {sx: 'column',md:"row"}}}>
            <Box sx={{ height:{sx:"auto", md:'92vh'}, borderRight:'19x solid #3d3d3d' , px: {sx:0, md:2 }}}>
                <Sidebar />
                <Typography className='copyright' varient="body2" sx={{ mt:1.5, color: '#fff'}}>
                    copyright 2022 AKZ media
                </Typography>
            </Box>
            <Box p={2} sx={{overflowY:'auto'  ,height:"90vh", flex:2 }} >
                <Typography varient='h4' fontWeight="bold" mb={2} sx={{color:'white'}}  >
                    New <span style={{color:'#F31503'}} >videos</span>
                </Typography> 
                <Videos />
            </Box>
        </Stack>
    )
}

export default Feed