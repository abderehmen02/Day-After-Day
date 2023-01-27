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
import UnlogedNav from "../components/unlogedNav";
import {
  FormControl,
  Stack,
  Box,
  styled,
  TextField,
  Button,
} from "@mui/material";


const MyInput = ({value , onchange} : {value : any , onchange : any})=>{
return <div>
  <input value={value} onChange={(e)=>onchange(e.target.value)} ></input>
</div>
}


  const CssTextField = styled(TextField)(({ theme }) => ({
    width: "400px",
    color: "white",
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




export const Regester: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state) => state);
  const emailInput : any = useRef(null)
  const passwordInput : any = useRef(null)
  const firstNameInput : any = useRef(null)
  const lastNameInput : any = useRef(null)
  const [myError, setmyError] = useState(null);
  const [birthDate, setBirthDate] = useState<string>(new Date().toUTCString());
  const birthDateInput : any = useRef(null)

  // components

  const SignUpPage = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
    gap: "48px",
    backgroundColor: theme.palette.primary.main,
  }));


  const handleSubmit = async (event: any) => {
    dispatch({ type: userLoginTypes.userLoginRequest });
    console.log("data")
    console.log(birthDateInput.current.value.toString())
    console.log( emailInput.current.value);
    console.log( passwordInput.current.value );
    console.log(firstNameInput.current.value + lastNameInput.current.value);
    
    const { data, error } = await regester({
      email : emailInput.current.value,
      password : passwordInput.current.value  ,
      birthDate : birthDateInput.current.value.toString() ,
      fullName : firstNameInput.current.value + lastNameInput.current.value,
    });
    if (error) {
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
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="80%"
      >
        <FormControl
          sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <Stack
            direction="row"
            spacing="5%"
            width="400px"
            justifyContent="space-between"
          >
        
            <CssTextField
             id="firstName" 
              label="First Name"
              key="firstName"
              inputRef={firstNameInput}
            />
            <CssTextField
                inputRef={lastNameInput}
               label="Last Name"
            />
          </Stack>
          <CssTextField
          inputRef={emailInput}
            label="Email"
          />
          <CssTextField
            inputRef={passwordInput}
            label="Password"
          />
          <CssTextField
            inputRef={birthDateInput}
            label="Birth Date"
            type="date"
          />      
          <Button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            variant="contained"
          >
            Regester
          </Button>
        </FormControl>
        <img src={SignUpImage} style={{ width: "30%", height: "100%" }} />
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
