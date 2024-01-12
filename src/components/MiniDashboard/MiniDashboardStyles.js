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
        width: { xs: "357px", md: "25%" },
        placeItems: { xs: "center", lg: "normal" },
        // need theme.breakpoints for this because the 1st element you don't want to have a marginLeft and you only want this to apply at mobile screen sizes
        // also theme.breakpoints.down("md") is not using my correct breakpoint of 600, it's using it's default breakpoint of 900, I don't know why
        [theme.breakpoints.down("600")]: { marginLeft: "0rem",  marginTop: "1rem" }
    },
    main_content_dashboard_sales_clients_trash_percentage: {
        display: 'flex',
        color: 'teal',
        flexDirection: { xs: "column", lg: "row" },
        placeItems: { xs: "center", lg: "normal" },
    },
}

export default classes;