import { Typography  , Stack  , styled,Box} from '@mui/material'
import React from 'react'
import { AboutPageComponentsType, AboutPageComponentType } from '../../types/data/about'


export const  AboutText = ()=> {
  return (
    <div className='aboutComponent' >
        <h2>what it Day After Day </h2>
        <p>
            if you are a person who always strugles with low productivity during his day , than this app is for you  ;
            with this app you can set the productivity of each day and compare the productivity of the current day with the day before,
            you can also set your goals and trach them while you are seeking to acheive them day after day until you acheive all your specified goals 
        </p>
    </div>
  )
}

export const HowToUseApp = ()=>{
   return <div className='aboutComponent'>
        <h2> How To Use Day After Day </h2>
        <div className='aboutSubComponent'>
            <h5>productivity</h5>
        <p>
at the end of each day , write down how many hours you have been productive in your day , compare that amout of hour to the amout of hours of the day before 
        </p>
        </div>
        <div className='aboutSubComponent'>
            <h5>goals</h5>
            <p>
at the beggining of each month , set the goals of the months , and at each week set the progress that you have acheived of each goal 
            </p>
        </div>
    </div>
}


export const AboutHeader = () :  JSX.Element=>{
    return <Box sx={{display : 'flex' , alignItems: 'center' , justifyContent : 'center' , flexDirection : 'column'}}>
        <Typography variant="h3" color={(theme)=>theme.palette.secondary.light} >About </Typography>
        <Typography variant='h4' color={(theme)=>theme.palette.white.light} > How To Use Day After Day </Typography>
    </Box>
}


export const AboutComponent : React.FC<{data : AboutPageComponentType , index : number} > = (props  ) : JSX.Element =>{

    const StyledAboutComponent = styled(Box)(({theme})=>({
        display : 'flex' , 
        alignItems : 'center' , 
        gap : '128px' ,
        width : '90%' ,
        padding : '50px' ,
         flexDirection : props.index % 2 === 0 ? 'row' : 'row-reverse' , 
         [theme.breakpoints.down("sm")] : {
            flexDirection : 'column-reverse' ,
            padding : '0px' , 
            gap : '40px' , 
         }
    }))
    return <StyledAboutComponent>
<img src={props.data.image} ></img>
<Stack gap='40px'  >
    <Stack gap="8px" >
    <Typography textAlign="center" variant="h3" color={(theme)=>theme.palette.secondary.light}>{props.data.title }</Typography>
    <Typography textAlign="center"  variant="h4" color={(theme)=>theme.palette.secondary.main}  >{props.data.subtitle}</Typography>
    </Stack>
    <Stack gap="20px" textAlign={{xs: 'center' , sm : 'start'}} >
{props.data.paragraphs?.map(paragraph => <Typography color={(theme)=>theme.palette.white.light} >{paragraph}</Typography>)}
    </Stack>
</Stack>
    </StyledAboutComponent>
}