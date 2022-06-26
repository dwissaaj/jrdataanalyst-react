
import { Stack,Button,createTheme,ThemeProvider, Grid } from '@mui/material';
import { bgcolor, borderColor, Container } from '@mui/system';
import {Link} from 'react-router-dom'
import Introduction from './Introduction';

import './PageOne.css'

const styled = {
    color:'white',
    fontSize:15,
    width:150,
    border:3,
    borderRadius:2,
    borderColor:'#066163',
    fontFamily:'Bungee',
    marginTop:'25px',
    marginBottom:'10px',
    marginLeft:'30px',
    
}

const PageOne = () => {

    return ( 
            <Container className="navCon">
            <Stack direction='row'>
                <p className='navPort'>PORTFOLIO</p>
                <div className='navDiv'>
                    <Link to='/powerbi'>
                        <Button  sx={styled}>POWER BI</Button>
                    </Link>
                    <Button target="_blank" href='https://public.tableau.com/app/profile/dwi.setyo.aji#!/' sx={styled}>TABLEAU</Button>
                </div>
            </Stack>
            <Introduction/>
        </Container>
     );
}
 
export default PageOne;