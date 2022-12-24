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
            "&:hover" : {
              backgroundColor : '#f5dc62'
            }
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            // border: `4px dashed ${red[500]}`,
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
    fontWeight : 'bolder'
}

theme.typography.h4 = {
    fontSize : '24px'
}
theme.typography.h5 = {
  fontSize : '16px'
}




export default theme