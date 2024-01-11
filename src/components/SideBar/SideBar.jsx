import { Box, Paper, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./SideBarStyles";

const SideBar = () => (
	<Paper elevation={3} sx={classes.side_bar_paper_container}>
		<MenuIcon sx={classes.side_bar_hamburger_menu_icon}/>
		<Typography variant="h3" sx={classes.side_bar_header}>The King's Restaurant</Typography>
		<Typography variant="h6" sx={classes.side_bar_sub_header}>Dashboard Owner</Typography>
		<Box sx={classes.side_bar_home_container}>
			<HomeOutlinedIcon />
	<Typography variant="body1" sx={classes.side_bar_home_content}>Dashboard</Typography>
		</Box>
		<Box sx={classes.side_bar_faq_container}>
			<HelpOutlineIcon />
	<Typography variant="body1" sx={classes.side_bar_faq_content}>FAQ Page</Typography>
		</Box>
	</Paper>
);

export default SideBar;
