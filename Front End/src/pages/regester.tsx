import React, { useRef, useState } from "react";
import { regester } from "../actions/auth";
import { authInfo } from "../types/actions/auth";
import { userLoginTypes } from "../types";
import * as ActionCreators from "../state/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../features/regester/components";
import "../features/regester/index.css";
import SignUpImage from "../assets/images/signUp.png";
import { stateType } from '../state/reducers'
import UnlogedNav from "../components/unlogedNav";
import {
  FormControl,
  Stack,
  Box,
  styled,
  TextField,
  Button,
} from "@mui/material";



  const SignUpPage = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
    gap: "48px",
    backgroundColor: theme.palette.primary.main,
  }));




  const CssTextField = styled(TextField)(({ theme }) => ({
    width: '400px' ,
    color: "white",
    [theme.breakpoints.down("sm")] : {
    width : '100%'
    } ,
    "& label.Mui-focused": {
      color: theme.palette.secondary.light,
    },
    "& label.Mui": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& label": {
        color: "white",
      },
      "& fieldset": {
        borderColor: theme.palette.white.light,
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.light,
      },
    },
  }));











const MyInput = ({value , onchange} : {value : any , onchange : any})=>{
return <div>
  <input value={value} onChange={(e)=>onchange(e.target.value)} ></input>
</div>
}





export const Regester: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = bindActionCreators(ActionCreators, dispatch);
  const userLogin  = useSelector((state: stateType)=>state.userLogin)
  const state = useSelector((state) => state);
  const emailInput : any = useRef(null)
  const passwordInput : any = useRef(null)
  const [FullName, setFullName] = useState<string>("")
  const [Password, setPassword] = useState<string>("")
  const [Email, setEmail] = useState<string>("")
  const fullNameInput : any = useRef(null)
  const [myError, setmyError] = useState(null);
  const [birthDate, setBirthDate] = useState<string>(new Date().toUTCString());
  const birthDateInput : any = useRef(null)
  // components
 console.log("fullname")
 console.log(FullName)


  const handleSubmit = async (event: any) => {
    event.preventDefault() ;
    console.log("email")
    console.log(Email)
    dispatch({ type: userLoginTypes.userLoginRequest });    
    const { data, error } = await regester({
      email : Email,
      password : Password,
      birthDate : birthDate.toString() ,
      fullName : FullName 
    });
    if (error) {
      console.log("email after")
      console.log(Email)
      return dispatch({ type: userLoginTypes.userLoginFail, error });
    }
    login(data.token, data.userObj);
    navigate("/productivity");
  };

  return (
    <SignUpPage>
      <UnlogedNav />
      <Header />
      <Stack
        direction={{xs : 'column' , sm : 'row'}}
        justifyContent="space-around"
        alignItems="center"
        width="80%"
        spacing={{xs: '40px'}}
      
      >
        <FormControl
          sx={{ display: "flex", flexDirection: "column", gap: "16px" , width: '100%'  }}
        >
        
            <CssTextField
             id="fullname" 
             
             value={FullName}
             onChange={(e)=>setFullName(e.target.value)}
             error={userLogin.error === 'fullname should be more than 2 characters' || userLogin.error === "full name used"}
             helperText={userLogin.error === 'fullname should be more than 2 characters'  || userLogin.error === "full name used" ? userLogin.error  : "username should be more than 2 characters" }
              label="fullname"
              key="fullName"
                      /> 
          <CssTextField
                        value={Email}
              onChange={(e)=>setEmail(e.target.value)}
             label="email"
             type="email"
              error={userLogin.error === 'email not valid'}
             helperText={userLogin.error === 'email not valid' && userLogin.error   }
          />
          <CssTextField
             value={Password}
             onChange={(e)=>setPassword(e.target.value)}
             error={userLogin.error === 'password should be more than 8 characters'}
             id="password" 
             label="password"
             type="password"
             helperText='password should be more than 8 characters'
              key="password"
          />
          <CssTextField
            value={birthDate}
            onChange={(e)=>setBirthDate(e.target.value)}
            error={userLogin.error === 'you should be older than 4 years' || userLogin.error === "check your birthDate"}
             helperText={userLogin.error === 'you should be older than 4 years' || userLogin.error === "check your birthDate" && userLogin.error   }
              // defaultValue={userLogin.error === 'you should be older than 4 years' || userLogin.error === "check your birthDate"? " " : '' }  
            type="date" 
            label='birth date'
            InputLabelProps={{
            shrink: true,
          }}
          />      
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{width : {xs: '100%' , sm : '400px'}}}
          >
            Regester
          </Button>
        </FormControl>-
<Box  sx={{ width: {sm : '30%' , xs : '50%'}, height: "100%"}} >        <img src={SignUpImage} style={{width :'100%' , height : '100%'}}  /></Box>
      </Stack>
    </SignUpPage>
  );
};

{
  /* <div><label>full name</label><input  onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  ></input>   </div>
<div><label>email</label><input type="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}  ></input>    </div>
<div><label>birthDate</label><input onChange={(e)=>{setBirthDate(e.target.value.toString())}} value={birthDate}  type='Date' ></input>  </div>
<div><label>password</label><input value={password} onChange={(e)=>{setPassword(e.target.value)}} ></input> </div>
      <button onClick={(e)=>{handleSubmit(e)}} type="submit" > regester </button> */
}
