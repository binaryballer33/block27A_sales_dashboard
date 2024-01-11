import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    main_content_paper_container: {
        minHeight: '100%',
        padding: "1.5rem",
        overflow: "scroll",
        width: "75%"
    },
    main_content_icon: {
        marginBottom: "1rem"
    },
    main_content_header: {
        fontWeight: "bold", 
        fontSize: { xs: "3rem" },
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        }
    },
    main_content_sub_header: {
        color: "teal", 
        marginBottom: "2.5rem",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        }
    },
    main_content_dashboard_sales_client_traffic: {
        display: "flex",
        overflow: "scroll",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            placeItems: "center",
        }
    },
    main_content_big_dashboard_container: {
        display: "flex",
        marginTop: "2rem",
        height: "55%",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            placeItems: "center",
        }
    },
    main_content_dashboard_revenue_generated_container: {
        backgroundColor: "#f4f4f4", 
        padding: "2rem",
        flexGrow: "1",
        height: "350px",  

        [theme.breakpoints.down("md")]: {
            minWidth: "320px",
            maxHeight: "200px",
            textAlign: 'center'
        }
    },
    main_content_dashboard_recent_transactions_container: {
        marginLeft: '2rem', 
        backgroundColor: "#f4f4f4",
        padding: "2rem",
        height: "350px",
        width: "325px",
        overflow: "scroll",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0rem",
            marginTop: "1rem",
            height: "350px",
        }
    },
    main_content_divider: {
        marginTop: '1rem', 
        marginBottom: '1rem',  
        color: 'black', 
        border: "2px solid black",
        minWidth: "320px"
    },
    main_content_dashboard_button: {
        color: 'white', 
        backgroundColor: 'teal', 
        borderRadius: '.5rem'
    },
    main_content_dashboard_transaction_container: {
        display: "flex", 
        marginTop: "1rem",
        justifyContent: "space-between",
        overflow: "scroll",
        minWidth: "320px"
    }
}

export default classes;