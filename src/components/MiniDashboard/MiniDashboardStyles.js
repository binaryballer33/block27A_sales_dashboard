import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    main_content_dashboard_sales_client_traffic_item: {
        display: 'flex', 
        flexDirection: "column", 
        justifyContent: 'space-evenly',
        backgroundColor: '#f4f4f4', 
        padding: '1rem', 
        height:"125px", 
        width: "25%",
        [theme.breakpoints.down("1000")]: {
            placeItems: "center",
        },
        [theme.breakpoints.down("600")]: {
            marginLeft: "0rem",
            marginTop: "1rem",
            minWidth: "300px",
            placeItems: "center",
        }
    },
    main_content_dashboard_sales_clients_trash_percentage: {
        display: 'flex',
        color: 'teal',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            placeItems: "center",
        }
    },
}

export default classes;