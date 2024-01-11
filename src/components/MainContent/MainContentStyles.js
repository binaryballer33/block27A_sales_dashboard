import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    main_content_paper_container: {
        minHeight: '100%',
        marginLeft: "1rem",
        padding: "1.5rem",
        overflow: "scroll",
        width: "75%",
        [theme.breakpoints.down("1000")]: {
            width: '95%',
            marginLeft: "0rem",
        },
        [theme.breakpoints.down("420")]: {
            width: '95%',
            marginLeft: "0rem",
            padding: ".5rem",
        },
    },
    main_content_icon: {
        marginBottom: "1rem"
    },
    main_content_header: {
        fontWeight: "bold", 
        fontSize: { xs: "3rem" },
        [theme.breakpoints.down("1000")]: {
            textAlign: "center",
        }
    },
    main_content_sub_header: {
        color: "teal", 
        marginBottom: "2.5rem",
        [theme.breakpoints.down("1000")]: {
            textAlign: "center",
        }
    },
    main_content_dashboard_sales_client_traffic: {
        display: "flex",
        overflow: "scroll",
        width: "100%",
        [theme.breakpoints.down("1000")]: {
            justifyContent: "center",
        },
        [theme.breakpoints.down("600")]: {
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
        },
        [theme.breakpoints.down("1000")]: {
            flexDirection: 'column',
            placeItems: "center",
        }
    },
    main_content_dashboard_revenue_generated_container: {
        backgroundColor: "#f4f4f4", 
        padding: "2rem",
        flexGrow: "1",
        height: "350px",
        [theme.breakpoints.down("1000")]: {
            width: "400px",
            maxHeight: "200px",
            textAlign: 'center',
        },  
        [theme.breakpoints.down("md")]: {
            width: "400px",
            maxHeight: "200px",
            textAlign: 'center',
        },
        [theme.breakpoints.down("510")]: {
            width: "300px",
        },
    },
    main_content_dashboard_recent_transactions_container: {
        marginLeft: '2rem', 
        backgroundColor: "#f4f4f4",
        padding: "2rem",
        height: "350px",
        width: "325px",
        overflow: "scroll",
        [theme.breakpoints.down("1000")]: {
            width: "400px",
            marginTop: "1rem",
            marginLeft: "0rem",
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: "0rem",
            marginTop: "1rem",
            height: "350px",
        },
        [theme.breakpoints.down("510")]: {
            width: "300px",
            marginTop: "1rem",
            marginLeft: "0rem",
        },
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