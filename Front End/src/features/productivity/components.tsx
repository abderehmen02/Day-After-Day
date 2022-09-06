import React , {useState , useEffect} from 'react'  ;
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

export const CreateProductivity  =  () : JSX.Element =>{
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  console.log(productivityInfo)
  console.log("productivity info")
  const  dispatch = useDispatch()   ;
  const [date, setDate] = useState<string>(new Date().toISOString())
  const [days, setDays] = useState<oneProductivityState[]>([])
  const state = useSelector((state : stateType)=>state)
  const [error, setError] = useState<object>({})
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction}= bindActionCreators(actionsCreators , dispatch)  

  return (  <div className='footerProductivity' >
  <img src={productivityImageOne} />
  <div className='createProductivity' >
  <h6> Create Productivity <i className="bi bi-plus-circle-fill icon"></i> </h6>
<div className='productivityInputContainer' >  <input className='createProductivityItem productivityInput' placeholder='your productivity' type="number" value={todayProductivity} onChange={(e)=>{setTodayProductivity(  parseFloat(e.target.value)  )}} ></input> <span>number of hours</span> </div> 
<div className='productivityInputContainer' ><input className='createProductivityItem' type="Date" value={date} onChange={(e)=>{setDate(e.target.value)}} ></input><span>date of productivity</span></div>
  <button className='createProductivityItem add' onClick={()=>{submitProd({value : todayProductivity , date  }, userLogin.token , emitAction , setError  )}} >save <i className="bi bi-plus-circle-fill"></i></button>
  <button  className='createProductivityItem delete'  onClick={()=>{deleteProd(productivityInfo.data?.current._id , userLogin.token , emitAction , setError )}} > delete <i className="bi bi-trash3-fill"></i> </button>
 </div> 
 <img src={productivityImageTwo} />
  </div>  )
}



export const Graph = ({days } : {days : Array<any>}) : JSX.Element =>{
    console.log("days from graph")
  console.log(days)

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
          axisLine={false}
          tickLine={false}
          tickFormatter={(str)=>{
            return str.slice(8,10)
          }}
        />

        <YAxis
            max={10}
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}

        /> <Legend/>
        <Cross x={10} y={1} width={2} height={50} />
          <Tooltip/>
        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </BarChart>
    </ResponsiveContainer>   </div>
}

export const Header  = ():JSX.Element=>{
  
  return <div className='productivityHeader' >
<h4>Productivity</h4>
<h6>{new Date().getDate()} ' {months[new Date().getMonth()]}</h6>
</div>
}