import { Box } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";
import classes from './DashboardStyles.js'

const Dashboard = () => (
	<Box sx={classes.dashboard}>
		<SideBar />
		<MainContent />
	</Box>
);

export default Dashboard;
