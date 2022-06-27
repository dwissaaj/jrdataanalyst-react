import { Container,Button,Grid } from "@mui/material";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ArticleCard from "./ArticleCard";
import reactlogo from '../card/reactlogo.png'
import python from '../card/python.png'
import ppwoer from '../card/ppwoer.png'
import tabley from '../card/tableay.png'
import ga from '../card/ga.png'
import ef from '../card/ef.png'
import ja from '../card/ja.jpg'
import node from '../card/node.png'
const btnDown = {
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
    
}
const btnUpn = {
    color:'#CDBE78',
    fontSize:15,
    backgroundColor:'#066163',
    width:'500px',
    height:'60px',
    borderRadius:5,
    fontFamily:'Bungee',
    marginTop:'25px',
    marginBottom:'10px',

    
}
const PageTwo = () => {
    return (
        <>
        <Container sx={{margin:'auto',marginTop:'100px'}}>
            <Grid   container
                    alignItems="center"
                    justifyContent="center">
                <Button target="_blank" href="https://www.linkedin.com/in/dwi-setyo-aji/details/certifications/" sx={btnUpn}>A FEW MY SKILL AND CERTIFICATION</Button>
            </Grid>
            <Grid container
                    alignItems="center"
                    justifyContent="space-evenly" 
                    sx={{marginBottom:'40px'}}>
                <Link to='/'>
                    <Button sx={btnDown}>GO BACK</Button>
                </Link>
                <a style={{ textDecoration: 'none' }} href="https://drive.google.com/uc?export=download&id=16-PAv94hO6rg_sICZj21GGv7FYqpMuYk"><Button sx={btnDown}>DOWNLOAD CV</Button></a>
            </Grid>
            <Grid>
                <Swiper
            pagination={{
            type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
                <SwiperSlide>
                <Grid   container
                    alignItems="center"
                    justifyContent="center">
                <ArticleCard image={reactlogo} title="React Js" paragraf="Honestly I am still new to front end web development. I start to learn React Js since Studi Independent with Zenius Education Full Stack,CI/CD, and Cloud Engineering but I always learn new everyday. This web is developed by React Js with framework like Material UI or bootstrap."/>
                </Grid>   
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={python} title="Python" paragraf="I learn python for data analyst and learn develop machine learning with Sklearn,Tensorflow or Gensim. A few example for model you can see in my github repository. A few purpose of this model is sentiment analysis,topic modelling and etc. I taking online course in Coursera,DQLAB,and Youtube"/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={tabley} title="Tableau" paragraf="On of the best Business Intelligence I ever worked with. Mainly I use this for data analyst. You can saw a few my dashboard in tablau public. Gain certificate from ShiftAcademy and Google Data Analytic in Coursera. One of reason I learn this because I want to become a data analyst"/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={ppwoer} title="POWER BI" paragraf="A great data analyst tool to create dashboard and report,even I am not best with it but I tried learn it from Myskill academy. The concept similiar to Tableau so I hope I can work with you one day with this tool"/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={node} title="NodeXL" paragraf="Excel Plugin for social media monitoring like Twitter. Analyze trending and actor in a issue or hastag trending. I have work with this tools with a company for analyze their SWOT from competitor. I also use this for my bachelor degree thesis"/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={ga} title="Google Analytic" paragraf="A tools for digital marketing and for tracking website visitor using their cookies. Start to learn from Google Analytic Academy and I also interested in digital marketing world combine Google Analytic and human behaviour prediction."/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={ef} title="English" paragraf="I don't my english good or bad since I never take TOEFL but for my EF SET score I got 64/100 (C1 Advanced). I have private tutoring for 6 years in elementary school. I little bit hesitant to put this or not"/>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid   container
                    alignItems="center"
                    justifyContent="center">
                    <ArticleCard image={ja} title="Japanese" paragraf="I loved japanese idol since High School and start to learn japanese. I only can read katakana and hiragana. I also take a few japanese private lesson in ELF Education"/>
                    </Grid>
                </SwiperSlide>
               </Swiper>
            </Grid>
            
        </Container>
        </>
     );
}
 
export default PageTwo;