import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    side_bar_paper_container: {
        backgroundColor: '#f4f4f4',
        padding: '1.5rem',
        minHeight: '100%',
        width: '25%',
        [theme.breakpoints.down("1000")]: {
            width: '98%',
            marginBottom: '1rem',
            padding: '.5rem',
        }
    },
    side_bar_hamburger_menu_icon: {
        marginBottom: '1rem',
        paddingLeft: '3rem',
        [theme.breakpoints.down("600")]: {
            paddingLeft: '0rem',
        }
    },
    side_bar_header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: { xs: '2.5rem', lg: '3rem' }
    },
    side_bar_sub_header: {
        color: 'teal', 
        marginBottom: '2.5rem', 
        textAlign: 'center',
        fontSize: { xs: '.75rem', sm: '1rem', md: '1.15rem' }
    },
    side_bar_home_container: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    side_bar_home_content: {
        color: "rebeccapurple",
        marginLeft: '1.5rem', 
    },
    side_bar_faq_container: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '2rem',
        [theme.breakpoints.down("1000")]: {
            paddingBottom: '1rem',
        }
    },
    side_bar_faq_content: {
        marginLeft: '1.5rem'
    }
}

export default classes;

