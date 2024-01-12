const classes = {
    main_content_paper_container: {
        height: '100%',
        marginLeft: { sm: "0rem", lg: "1rem"},
        padding: { sm: ".5rem", lg: "1.5rem"},
        overflow: "scroll",
        width: { sm: "98%", lg: "75%"},
    },
    main_content_icon: {
        marginTop: { xs: ".5rem", sm: "0rem" },
        marginBottom: "1rem",
        marginLeft: { xs: ".5rem", sm: "0rem" },
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
    main_content_dashboard_sales_client_traffic_container: {
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
        flexDirection: { xs: "column", md: "row" },
        placeItems: { xs: "center", lg: "start" },
    },
    main_content_dashboard_revenue_generated_container: {
        flexGrow: "1",
        backgroundColor: "#f4f4f4",
        marginLeft: { xs: "0rem", md: "1rem", lg: "0rem" },  
        padding: { xs: "1rem", lg: "2rem" },
        height: { xs: "200px", md: "400px", lg: "465px" },
        width: { xs: "357px", md: "150px", lg: "33%" },
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_dashboard_recent_transactions_container: {
        backgroundColor: "#f4f4f4",
        marginTop: {xs: "1rem", md: "0rem"},
        marginRight: { xs: "0rem", md: "1rem", lg: "0rem" }, 
        marginBottom: { xs: "2rem", sm: "0rem" },
        marginLeft: { xs: "0rem", md: "1rem", lg: "2rem" }, 
        padding: { xs: "1rem", lg: "2rem" },
        height: { xs: "350px", md: "400px", lg: "465px" },
        width: { xs: "357px", md: "325px", lg: "325px" },
        overflow: "scroll",
    },
    main_content_dashboard_recent_transactions_column_names_container: {
        display: "flex", 
        justifyContent: "space-between",
        margin: "1rem 0rem",
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