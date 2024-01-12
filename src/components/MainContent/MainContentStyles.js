const classes = {
    main_content_paper_container: {
        height: '100%',
        padding: { sm: ".5rem", lg: "1.5rem"},
        overflow: "scroll",
        display: "grid",
        gridTemplateAreas: {
            lg: `
                "${'icon '.repeat(12)}"
                "${'header '.repeat(12)}"
                "${'sub_header '.repeat(12)}"
                "${'mini_dashboard '.repeat(12)}"
                "${'revenue_generated '.repeat(11)} ${'recent_transactions '.repeat(1)}"
            `,
            md: `
                "${'icon '.repeat(12)}"
                "${'header '.repeat(12)}"
                "${'sub_header '.repeat(12)}"
                "${'mini_dashboard '.repeat(12)}"
                "${'revenue_generated '.repeat(10)} ${'recent_transactions '.repeat(2)}"
            `,
            xs: `
                "${'icon '.repeat(12)}"
                "${'header '.repeat(12)}"
                "${'sub_header '.repeat(12)}"
                "${'mini_dashboard '.repeat(12)}"
                "${'revenue_generated '.repeat(12)}"
                "${'recent_transactions '.repeat(12)}"
            `
        },
    },
    main_content_icon: {
        gridArea: "icon",
        marginTop: { xs: ".5rem", sm: "0rem" },
        marginBottom: "1rem",
        marginLeft: { xs: ".5rem", sm: "0rem" },
    },
    main_content_header: {
        gridArea: "header",
        fontWeight: "bold", 
        fontSize: { xs: "3rem" },
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_sub_header: {
        gridArea: "sub_header",
        color: "teal", 
        marginBottom: "2.5rem",
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_dashboard_sales_client_traffic_container: {
        gridArea: "mini_dashboard",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 4fr)" },
        justifyContent: { xs: "space-around", lg: "start" },
        placeItems: { xs: "center", md: "start" },
        marginLeft: { xs: "0rem", md: "1rem", lg: "0rem" },
    },
    main_content_dashboard_revenue_generated_container: {
        gridArea: "revenue_generated",
        marginTop: "2rem",
        backgroundColor: "#f4f4f4",
        marginLeft: { xs: "0rem", md: "1rem", lg: "0rem" },  
        padding: { xs: "1rem", lg: "2rem" },
        height: { xs: "200px", md: "400px", lg: "465px" },
        width: { xs: "90%", md: "auto" },
        textAlign: { xs: "center", lg: "left" },
    },
    main_content_dashboard_recent_transactions_container: {
        gridArea: "recent_transactions",
        backgroundColor: "#f4f4f4",
        marginTop: {xs: "1rem", md: "2rem"},
        marginBottom: { xs: "2rem", sm: "0rem" },
        marginLeft: { xs: "0rem", md: "1rem", lg: "2rem" }, 
        padding: { xs: "1rem", lg: "2rem" },
        width: { xs: "90%", md: "auto" },
        height: { xs: "350px", md: "400px", lg: "465px" },
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
    }
}

export default classes;