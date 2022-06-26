
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography} from "@mui/material";

const ArticleCard = (props) => {
    return ( 
        <Card sx={{borderRadius:5,width:300,height:400,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
            <CardMedia sx={{height:'150px',objectFit:'contain'}} component="img" alt="fashion" image={props.image}/>
            <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.paragraf}
            </Typography>
            </CardContent>
        </Card>
     );
}
 
export default ArticleCard;