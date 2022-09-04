import React , {useState , useEffect} from 'react'  ;
import { submitProd , deleteProd  } from './functions'  ; 
import { useDispatch ,useSelector  } from 'react-redux'  ;
import { useNavigate } from 'react-router-dom'   ;
import { bindActionCreators } from 'redux'      ;
import { stateType } from '../../state/reducers';
import { loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState , productivityActionTypes, productivityState, userLoginState, oneProductivityState } from '../../types';
import * as actionsCreators from '../../state/actionCreators';
import {ResponsiveContainer , Legend , CartesianGrid  , Bar ,BarChart , Area ,  XAxis , YAxis , Tooltip } from 'recharts'
import CustomTooltip from './tooltip';
import {parseISO , format} from 'date-fns'

export const CreateProductivity  =  () : JSX.Element =>{
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  const  dispatch = useDispatch()   ;
  const [date, setDate] = useState<string>(new Date().toISOString())
  const [days, setDays] = useState<oneProductivityState[]>([])
  const state = useSelector((state : stateType)=>state)
  const [error, setError] = useState<object>({})
  console.log("state from productivity")
  console.log(state)
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction}= bindActionCreators(actionsCreators , dispatch)  
console.log("generating days")

  return (  <div className='createProductivity' >
  <input className='createProductivityItem productivityInput' placeholder='your productivity' type="number" value={todayProductivity} onChange={(e)=>{setTodayProductivity(  parseFloat(e.target.value)  )}} ></input> 
   <input className='createProductivityItem' type="Date" value={date} onChange={(e)=>{setDate(e.target.value)}} ></input>
  <button className='createProductivityItem add' onClick={()=>{submitProd({value : todayProductivity , date  }, userLogin.token , emitAction , setError  )}} >save <i className="bi bi-plus-circle-fill"></i></button>
  <button  className='createProductivityItem delete'  onClick={()=>{deleteProd(productivityInfo.data?.current._id , userLogin.token , emitAction , setError )}} > delete <i className="bi bi-trash3-fill"></i> </button>
 </div>    )
}



export const Graph = ({days } : {days : Array<any>}) : JSX.Element =>{
  console.log("days from graph")
  console.log(days)
    return   <div   className='graph'  >
 <ResponsiveContainer width="100%" height={400}>
         <BarChart data={days}>
         <CartesianGrid strokeDasharray="3 3" />
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Bar dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str).toISOString();
            console.log("date")
            console.log(typeof date)
            console.log(date.slice(8 , 10))
            return date.slice(8,10)
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}

        />
          <Tooltip/>
        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </BarChart>
    </ResponsiveContainer>   </div>
}