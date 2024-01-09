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
				<Box height="150px" width="300px" sx={{ bgcolor: '#f4f4f4', padding: '1rem' }}>
					<LocalAtmIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">431,225</Typography>
          <Typography sx={{ color: 'teal' }} variant="body2">Sales Obtained + 21%</Typography>
				</Box>
				<Box height="150px" width="300px" sx={{ bgcolor: '#f4f4f4', padding: '1rem' }} marginLeft='2rem'>
					<PersonAddIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">431,225</Typography>
          <Typography sx={{ color: 'teal' }} variant="body2">New Clients + 5%</Typography>
				</Box>
				<Box height="150px" width="300px" sx={{ bgcolor: '#f4f4f4', padding: '1rem' }} marginLeft='2rem'>
					<TrafficIcon sx={{ color: 'teal'}} />
          <Typography sx={{ fontWeight: 'bold' }} variant="body1">431,225</Typography>
          <Typography sx={{ color: 'teal' }} variant="body2">Traffic Received + 43%</Typography>
				</Box>
			</Box>

      {/* The Dashboards Part 2 */}
			<Box display="flex" marginTop="2rem">
        {/* Revenue Generated */}
        <Box bgcolor="#f4f4f4" height="450px" width="500px" padding="2rem"flexGrow={1}>
          <Typography variant="body1" fontWeight="bold">Revenue Generated</Typography>
          <Typography variant="h6" fontWeight="bold" color="teal">$59,342.32</Typography>
        </Box>

        {/* Transactions */}
        <Box marginLeft='2rem' bgcolor="#f4f4f4" padding="2rem" height="450px" width="350px">
          <Typography variant="body1" fontWeight="bold">Recent Transactions</Typography>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

        {/*Transaction # 1  */}
          <Box display='flex' marginTop="1rem">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">01e4dsa</Typography>
              <Typography variant="body1" fontWeight="bold"> johndoe</Typography>
            </Box>
            <Box marginLeft="3rem">
              <Typography variant="body1" fontWeight="bold">2021-09-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '4.5rem', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$43.95</Button>
          </Box>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

        {/*Transaction # 2  */}
          <Box display='flex' marginTop="1rem">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">01e4dsa</Typography>
              <Typography variant="body1" fontWeight="bold">jackdower</Typography>
            </Box>
            <Box marginLeft="2rem">
              <Typography variant="body1" fontWeight="bold">2022-04-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '4.25rem', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$133.45</Button>
          </Box>
          <Divider sx={{ marginTop: '1rem', marginBottom: '1rem',  color: 'black', border: "2px solid black" }} />

        {/*Transaction # 3  */}
          <Box display='flex' marginTop="1rem">
            <Box>
              <Typography variant="body1" fontWeight="bold" color="teal">01e4dsa</Typography>
              <Typography variant="body1" fontWeight="bold">aberdohnny</Typography>
            </Box>
            <Box marginLeft="1.25rem">
              <Typography variant="body1" fontWeight="bold">2021-09-01</Typography>
            </Box>
            <Button variant="contained" sx={{ marginLeft: '4.5rem', color: 'white', backgroundColor: 'teal', borderRadius: '.5rem' }}>$43.95</Button>
          </Box>
      </Box>
    </Box>
		</Paper>
	</Grid>
);

export default MainContent;
