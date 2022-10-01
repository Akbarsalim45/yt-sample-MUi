import React from 'react'
import {Channelcard, Videocard} from './'
import { Stack,Box } from '@mui/material'
import VIdeocard from './Videocard'

const Videos = ({videos}) => {

  console.log('prop',videos)
  return (
      <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
          {videos.map( (item,i) => (
            <Box key={i}>
             {item.id.channelId && <Channelcard  channelDetail={item} />}
             { item.id.videoId && <Videocard video={item} />}
            </Box>
          ))}
      </Stack>
  )
}

export default Videos 