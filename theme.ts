import {createTheme} from "@material-ui/core";


export const theme = createTheme({
    overrides: {
        MuiButton: {
            root: {
              borderRadius: `10px`
            },
            contained: {
                padding: '16px',
                height: '40px',
                backgroundColor: 'white',
                boxShadow: '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
                '&:hover': {
                    boxShadow: '0px 1px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
                    backgroundColor: 'white'
                }
            },
            label:{
                textTransform:'none',
                fontWeight:600
            }
        }
    }
});