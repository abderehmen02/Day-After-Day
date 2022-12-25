import {createTheme} from '@mui/material'



const theme = createTheme({
  
    palette : {
        primary : {
            main : '#2075A8' ,
            light : '#16A1F5'
        } ,
        secondary :  {
            main : '#A8A500' ,
            light : '#F5F11D'
        } ,
        error :{
            main : '#F52F32'
        } ,
        dark  : {
          main : '#6D6D6D' ,
          light : '#A3A3A3' ,
          dark : '#363636'
        } ,
        white : {
          main : '#ECECEC' ,
          light : '#ECECEC' ,
          dark : '#E3E3E3'
        }
    } ,
      components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor : '#F5F11D' ,
            color : 'black' ,
            borderRadius : '4px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '16px' ,
            paddingLeft : '16px' ,
            minWidth : '200px' ,
            "&:hover" : {
            backgroundColor : '#f5dc62' ,
            paddingTop : '9px' ,
            paddingBottom : '9px' ,
            paddingRight : '17px' ,
            paddingLeft : '17px' ,
            }
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            minWidth : '200px' ,
            backgroundColor : 'white' ,
            color : 'black' ,
            border :'2px solid black' ,
            cursor: 'pointer' ,
            borderRadius : '4px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '16px' ,
            paddingLeft : '16px' ,
            "&:hover" : {
              backgroundColor : 'black' ,
              color : 'white' ,
              border: '1px solid white  ',
              // adding one pixel in the padding for the border
            paddingTop : '9px' ,
            paddingBottom : '9px' ,
            paddingRight : '17px' ,
            paddingLeft : '17px' ,
            }
          },
        },
        {
          props: { variant: 'standard' },
          style: {
            minWidth : '200px' ,
            backgroundColor : '#16A1F5' ,
            color : 'white' ,
            // border :'2px solid black' ,
            cursor: 'pointer' ,
            borderRadius : '8px' ,
            paddingTop : '8px' ,
            paddingBottom : '8px' ,
            paddingRight : '16px' ,
            fontWeight : 'bold' ,
            paddingLeft : '16px' ,
            border: '1.5px solid white  ',
            "&:hover" : {
              backgroundColor : '#16A1F5' ,

              color : '#F5F11D' ,
              border: '1.5px solid #F5F11D' ,
              // adding one pixel in the padding for the border
            paddingTop : '9px' ,
            paddingBottom : '9px' ,
            paddingRight : '17px' ,
            paddingLeft : '17px' ,
            }
          },
        },
      ],
    },
  },

})

theme.typography.h1 = {
  fontSize: '48px',
  fontFamily : 'IM Fell Double Pica, serif' ,
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
};
theme.typography.h2 = {
    fontSize : '40px' , 
    fontFamily : 'IM Fell Double Pica, serif'
}

theme.typography.h3 = {
    fontSize : '32px' ,
        fontFamily : 'IM Fell Double Pica, serif'
}

theme.typography.h4 = {
    fontSize : '24px' ,
    fontWeight: 'normal'
}
theme.typography.h5 = {
  fontSize : '16px' ,
  fontWeight : 'bolder'
}




export default theme