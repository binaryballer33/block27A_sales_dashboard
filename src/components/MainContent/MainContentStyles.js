const classes = {
    main_content_paper_container: {
        height: '100%',
        marginLeft: { sm: "0rem", lg: "1rem"},
        padding: { sm: ".5rem", lg: "1.5rem"},
        overflow: "scroll",
        width: { sm: "98%", lg: "75%"},
    },
    main_content_icon: {
        marginBottom: "1rem"
    },
    main_content_header: {
        fontWeight: "bold", 
        fontSize: { xs: "3rem" },
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_sub_header: {
        color: "teal", 
        marginBottom: "2.5rem",
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_dashboard_sales_client_traffic: {
        display: "flex",
        overflow: "scroll",
        width: "100%",
        justifyContent: { xs: "center", lg: "start" },
        flexDirection: { xs: "column", md: "row" },
        placeItems: { xs: "center", lg: "start" },
    },
    main_content_big_dashboard_container: {
        display: "flex",
        marginTop: "2rem",
        height: "55%",
        flexDirection: { xs: "column", lg: "row" },
        placeItems: { xs: "center", lg: "start" },
    },
    main_content_dashboard_revenue_generated_container: {
        backgroundColor: "#f4f4f4", 
        padding: "2rem",
        flexGrow: "1",
        height: { xs: "200px", md: "250px", lg: "700px" },
        width: { xs: "325px", md: "82%", lg: "33%" },
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_dashboard_recent_transactions_container: {
        backgroundColor: "#f4f4f4",
        marginTop: {xs: "1rem", lg: "0rem"},
        marginLeft: { xs: "0rem", lg: "2rem" }, 
        padding: "2rem",
        height: { xs: "350px", md: "400px", lg: "700px" },
        width: { xs: "325px", md: "82%", lg: "325px" },
        overflow: "scroll",
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