import { Grid, Box, Paper, Typography, Button, Divider } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const MainContent = () => (
	<Grid item xs={9}>
		<Paper elevation={3} sx={{ height: "100vh", padding: "1.5rem" }}>
			{/* The Component Icon */}
			<Box sx={{ marginBottom: "1rem" }}>
				<WbSunnyOutlinedIcon />
			</Box>

			{/* The Component Headers */}
			<Typography
				sx={{
					fontWeight: "bold",
					fontSize: { xs: "1.25rem", md: "2.25rem", lg: "3rem" },
				}}
			>
				Dashboard
			</Typography>
			<Typography
				sx={{ color: "teal", marginBottom: "2.5rem" }}
				variant="body1"
			>
				Welcome To Your Dashboard
			</Typography>

			{/* The Dashboards Part 1 */}
			<Box display="flex">
				<Box height="125px" width="20%" sx={{ bgcolor: '#f4f4f4', padding: '1rem', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
					<LocalAtmIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">431,225</Typography>
          <Box sx={{ display: 'flex', color: 'teal', }}>
            <Typography sx={{ flexGrow: 1  }} variant="body2">Sales Obtained</Typography>
            <Typography sx={{ paddingRight: '1rem' }}>+ 21%</Typography>
          </Box>
        </Box>
				<Box height="125px" width="20%" sx={{ bgcolor: '#f4f4f4', padding: '1rem', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly'  }} marginLeft='2rem'>
					<PersonAddIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">32,441</Typography>
          <Box sx={{ display: 'flex', color: 'teal', }}>
            <Typography sx={{ flexGrow: 1 }} variant="body2">New Clients</Typography>
            <Typography sx={{ paddingRight: '1rem' }}>+ 5%</Typography>
          </Box>
        </Box>
				<Box height="125px" width="20%" sx={{ bgcolor: '#f4f4f4', padding: '1rem', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly'  }} marginLeft='2rem'>
					<TrafficIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">1.325,134</Typography>
          <Box sx={{ display: 'flex', color: 'teal', }}>
            <Typography sx={{ flexGrow: 1  }} variant="body2">Traffic Received</Typography>
            <Typography sx={{ paddingRight: '1rem' }}>+ 43%</Typography>
          </Box>
        </Box>
			</Box>

      {/* The Dashboards Part 2 */}
			<Box display="flex" marginTop="2rem" height="100%">
        
        {/* Revenue Generated */}
        <Box bgcolor="#f4f4f4" height="55%" width="500px" padding="2rem"flexGrow={1}>
          <Typography variant="body1" fontWeight="bold">Revenue Generated</Typography>
          <Typography variant="h6" fontWeight="bold" color="teal">$59,342.32</Typography>
        </Box>

        {/* Recent Transactions */}
        <Box marginLeft='2rem' bgcolor="#f4f4f4" padding="2rem" height="55%" width="350px">
          <Typography variant="body1" fontWeight="bold">Recent Transactions</Typography>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

          {/*Transaction # 1  */}
          <Box display='flex' marginTop="1rem" justifyContent="space-between">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">01e4dsa</Typography>
              <Typography variant="body1" fontWeight="bold"> johndoe</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="bold">2021-09-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$43.95</Button>
          </Box>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

          {/*Transaction # 2  */}
          <Box display='flex' marginTop="1rem" justifyContent="space-between">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">0315dsaa</Typography>
              <Typography variant="body1" fontWeight="bold">jackdower</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="bold">2022-04-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$133.45</Button>
          </Box>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

          {/*Transaction # 3  */}
          <Box display='flex' marginTop="1rem" justifyContent="space-between">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">01e4dsa</Typography>
              <Typography variant="body1" fontWeight="bold">aberdohnny</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight="bold">2021-09-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$43.95</Button>
          </Box>
      </Box>
    </Box>
		</Paper>
	</Grid>
);

export default MainContent;
