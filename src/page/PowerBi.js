import './PageOne.css'
import { Container,Typography,Grid } from "@mui/material";
const PowerBI = () => {
    const styledPBi = {
        color:'white',
        fontSize:30,
        fontFamily:'Bungee',
        
    }
    return ( 
            <Container>
                <Grid sx={{marginTop:'300px'}} container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <div className='boxDiv'>
                    <Typography sx={styledPBi}>"Sorry Try Contact Me by Email :("</Typography>
                </div>
                </Grid>
            </Container>
     );
}
 
export default PowerBI;