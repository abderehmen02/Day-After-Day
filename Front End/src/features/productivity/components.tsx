import React , {useState , useEffect, useRef} from 'react'  ;
import { submitProd , deleteProd  } from './functions'  ; 
import { useDispatch ,useSelector  } from 'react-redux'  ;
import { useNavigate } from 'react-router-dom'   ;
import { bindActionCreators } from 'redux'      ;
import { stateType } from '../../state/reducers';
import { loginSuccssAction  , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState , productivityActionTypes, productivityState, userLoginState, oneProductivityState } from '../../types';
import * as actionsCreators from '../../state/actionCreators';
import {ResponsiveContainer  , Cross , Legend , CartesianGrid  , Bar ,BarChart , Area ,  XAxis , YAxis , Tooltip } from 'recharts'
import CustomTooltip from './tooltip';
import {parseISO , format} from 'date-fns'; 
import { months } from '../../assets/months';
import productivityImageOne from '../../assets/images/productivity11.png'
import productivityImageTwo from '../../assets/images/productivity12.png'
import { TextField, styled , Typography , Button  , Stack, Box } from '@mui/material';

export const CreateProductivity  =  () : JSX.Element =>{
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  const  dispatch = useDispatch()   ;
  const dateInput : any = useRef(null)
  const todayProductivityInput : any = useRef(null)
  const state = useSelector((state : stateType)=>state)
  const [error, setError] = useState<object>({})
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction}= bindActionCreators(actionsCreators , dispatch)  

   const StayledAddProductivityComponentContainer = styled(Box)(({theme})=>({
    display : "flex" , 
    alignItems :"center" , 
    gap :'40px' ,
    paddingY : '40px' ,
    padding : '16px' ,
    backgroundColor : theme.palette.white.light ,
    border : '2px solid black' , 
    borderRadius : '16px' ,
    margin : '40px' ,
    width : '60%' ,
    boxShadow : '2px 2px 4px black' ,
    [theme.breakpoints.down("sm")] : {
      width : '90%'
    }
   }))



  return (  <StayledAddProductivityComponentContainer>
  <Stack gap="40px" width="100%"  alignItems="center" >
  <Typography color="primary" variant="h4" textAlign="center" marginY="40px"> Add New Productivity <i className="bi bi-plus-circle-fill icon"></i> </Typography>
  <TextField  placeholder='Number Of Hours' variant='outlined' fullWidth type="number"  inputRef={todayProductivityInput} ></TextField>  
  <TextField   type="date"  fullWidth inputRef={dateInput}></TextField>
  <Stack  gap="40px"  width="100%" flexDirection={{ xs : 'column' , sm : 'row' }} >
  <Button fullWidth variant="primary" onClick={()=>{ submitProd({value : todayProductivityInput.current.value , date : dateInput.current.value  }, userLogin.token , emitAction , setError  )}} >save <i className="bi bi-plus-circle-fill"></i></Button>
  <Button fullWidth variant="error"   onClick={()=>{deleteProd(productivityInfo.data?.current.day , userLogin.token , emitAction , setError )}} > delete <i className="bi bi-trash3-fill"></i></Button>
  </Stack>
 </Stack> 
  </StayledAddProductivityComponentContainer>  )
}



export const Graph = ({days } : {days : Array<any>}) : JSX.Element =>{
  

    return   <div   className='graph'  >
         <ResponsiveContainer width="100%" height={400}>
         <BarChart data={days}>
         <CartesianGrid strokeDasharray="0.3  0.31" />
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Bar dataKey="value" stroke="black" strokeLinecap='round' strokeWidth={2} fill="url(#color)" />

        <XAxis
          dataKey="day"
          axisLine={true}
          tickLine={true}
          tickFormatter={(str)=>{
            return str.slice(8,10)
          }}
        />

        <YAxis
            max={10}
          dataKey="value"
          axisLine={true}
          tickLine={true}
          tickCount={8}

        /> <Legend/>
        <Cross x={10} y={1} width={2} height={50} />
          <Tooltip/>
        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </BarChart>
    </ResponsiveContainer>   </div>
}

export const Header  = ():JSX.Element=>{
  
  return <Box sx={{display : 'flex' , gap : '16px' , padding : '40px',flexDirection : 'column' , alignItems : 'center' , width : '400px'}} >
    <Typography variant='h3' textAlign="center" color={(theme)=>theme.palette.secondary.light} >Productivity</Typography>
    <Typography variant="h5" textAlign="center" color={(theme)=>theme.palette.white.light} >Set how many hours you have been productive in your day</Typography>
  </Box>
}