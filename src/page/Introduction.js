import { Container,Typography,Stack,Button,Grid } from "@mui/material";
import { Box } from "@mui/system";
import {Link} from 'react-router-dom'
import ig from '../assets/ig.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mailbox from '../assets/mailbox.png'
import './PageOne.css'
import prof from '../assets/prof.png'
const styleImg = {
    width:'50px',
    height:'50px'
}
const styleTitle = {
    color:'white',
    fontSize:'30px',
    fontFamily:'Bungee',
    
}
const styleSubtitle = {
    color:'white',
    fontSize:'20px',
    fontFamily:'Bungee',
    
}
const styleBox = {
    width : 300,
    marginBottom:'10px'
}
const styleConBox = {
    width : '400px',
    height : '100%'

}
const imgBox = {
    width : '200px',
    height : '100%',
    marginRight:'300px',
    marginTop:'100px'
}
const btnHire = {
    color:'white',
    fontSize:15,
    width:'200px',
    height:'60px',
    border:3,
    borderRadius:5,
    borderColor:'white',
    fontFamily:'Bungee',
    marginTop:'25px',
    marginBottom:'10px',
    marginLeft:'30px',
    
}
const btnCert = {
    color:'#CDBE78',
    fontSize:15,
    backgroundColor:'#066163',
    width:'200px',
    height:'60px',
    borderRadius:5,
    fontFamily:'Bungee',
    marginTop:'25px',
    marginBottom:'10px',
    textDecoration:'none'
    
}
const Introduction = () => {

    return ( 
            <>
                <Container sx={{marginBottom:'50px'}}>  
                    <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                        <Grid>
                            <Box sx={imgBox}>
                                <img className='imgProfile' src={prof} alt="" />
                            </Box>
                        </Grid>
                        <Grid>
                            <Typography sx={styleTitle}>DWI SETYO AJI</Typography>
                            <Typography variant="subtitle1" sx={{width:500,color:'white',marginBottom:5}}>I am a student at communication science UPN Veteran Jawa Timur. Even I from social I have an ambition to become a data analyst. I love programming for front end and machine learning. I open for part time and intern. Click all this for contacting me. </Typography>
                            <Typography sx={styleSubtitle}>LET'S CONNECT</Typography>
                            <Stack direction='row' spacing={2}>
                                <Box sx={styleImg}>
                                <a target="_blank" href="https://www.instagram.com/dwisaji/"><img hr className="introImg"  src={ig}/></a>
                                </Box>
                                <Box sx={styleImg}>
                                    <a target="_blank" href="https://www.linkedin.com/in/dwi-setyo-aji/"><img hr className="introImg"  src={linkedin}/></a>
                                </Box>
                                <Box sx={styleImg}>
                                    <a target="_blank" href="https://github.com/dwissaaj"><img hr className="introImg"  src={github}/></a>
                                </Box>
                                <Box sx={styleImg}>
                                    <a target="_blank" href="mailto:dwisetyoaji@jrdataanalyst.com"><img hr className="introImg"  src={mailbox}/></a>
                                </Box>
                            </Stack>
                            <Stack direction='row'>
                                <Link to='/certification' style={{ textDecoration: 'none' }}>
                                    <Button sx={btnCert}>CERTIFICATION</Button>
                                </Link>
                                <a href="https://wa.me/6285251743273" target="_blank"><Button sx={btnHire} >HIRE ME</Button></a>
                            </Stack>
                        </Grid>
                    </Grid>
                
                </Container>
            </>
     );
}
 
export default Introduction;