import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";

const Dashboard = () => (
	<Grid container spacing={2}>
		<SideBar />
		<MainContent />
	</Grid>
);

export default Dashboard;
