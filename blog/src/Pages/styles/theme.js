import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette:{
        primary:{
            main:'#5CDB95',
            light:'#8EE4AF'
        },
        secondary:{
            main:'#05386B',
            light:'#379683'
        },
        other:{
            white:'#EDF5E1'
        },
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
        fontWeightLight:300,
        fontWeightMedium:500,
        fontWeightBold:700
    }
})