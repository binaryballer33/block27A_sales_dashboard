import { Grid, Box, Paper, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar = () => (
	<Grid item xs={3}>
		<Paper elevation={3} sx={{ height: "100vh", padding: '2rem', bgcolor: '#f4f4f4'}}>
			<MenuIcon sx={{ marginBottom: '1rem', paddingLeft: '3rem' }}/>
			<Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '2.25rem', lg: '3rem' } }} variant="h3">The King's Restaurant</Typography>
			<Typography sx={{ textAlign: 'center', color: 'teal', marginBottom: '2.5rem', fontSize: { xs: '1rem', md: '1.25rem' } }} variant="h6">Dashboard Owner</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<HomeOutlinedIcon />
        <Typography sx={{ marginLeft: '1.5rem', color: "rebeccapurple"}} variant="body1">Dashboard</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
				<HelpOutlineIcon />
        <Typography sx={{marginLeft: '1.5rem' }} variant="body1">FAQ Page</Typography>
			</Box>
		</Paper>
	</Grid>
);

export default SideBar;
