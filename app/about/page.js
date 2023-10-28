import { Typography ,Box} from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <Typography className='design2'><b>About Us</b></Typography>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh">
      <Typography className='design' >Have you ever wished you could get guidance from someone who has been there and done that? Someone who has retired from their field of expertise and has a wealth of knowledge and experience to share? If yes, then you will love our platform: <b>Expertia</b>, brings together retired experts from various fields, such as teachers, architects, doctors, financial experts, etc., to offer their wisdom, guidance, and services to individuals seeking assistance. <b>Expertia</b> connects you with experienced professionals who are eager to share their knowledge and expertise with upcoming young professionals in the corresponding fields. <b>Expertia</b> is more than just a platform; it’s a community of wisdom seekers and wisdom givers.</Typography> 
    </Box>
      </div>
  )
}

export default page