import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    dashboard: {
        display: "flex",
        minWidth: '100vw',
        minHeight: '100vh',
        [theme.breakpoints.down("1000")]: {
            flexDirection: 'column',
        }
    },
}

export default classes;