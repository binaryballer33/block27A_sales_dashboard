import { Box, Paper, Typography, Button, Divider, IconButton, Grid } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MiniDashboard from "../MiniDashboard/MiniDashboard";
import { mockMiniDashboards, mockTransactions } from "../../assets/mockData";
import classes from './MainContentStyles';

const MainContent = () => (
  <Grid item xs={12} lg={9}>
    <Paper elevation={3} sx={classes.main_content_paper_container}>
      {/* The Component Icon */}
      <Box sx={classes.main_content_icon}>
        <IconButton color="primary"><WbSunnyOutlinedIcon /></IconButton>
      </Box>

      {/* The Component Headers */}
      <Typography sx={classes.main_content_header}>Dashboard</Typography>
      <Typography variant="body1" sx={classes.main_content_sub_header}>Welcome To Your Dashboard</Typography>

      {/* Mini Dashboards */}
      <Box sx={classes.main_content_dashboard_sales_client_traffic_container} >
        {mockMiniDashboards.map((miniDashboard, index) => (
          <MiniDashboard 
            key={index} 
            IconComponent={miniDashboard.icon} 
            sales_amount={miniDashboard.sales_amount} 
            header={miniDashboard.header} 
            percentage={miniDashboard.percentage} 
            marginLeft={index === 0 ? "0rem" : "1rem"} 
          />
        ))}
      </Box>
        
      {/* Big Dashboard Revenue Generated */}
      <Box sx={classes.main_content_dashboard_revenue_generated_container}>
        <Typography variant="body1" fontWeight="bold">Revenue Generated</Typography>
        <Typography variant="h6" fontWeight="bold" color="teal">$59,342.32</Typography>
      </Box>

      {/* Big Dashboard Recent Transactions */}
      <Box sx={classes.main_content_dashboard_recent_transactions_container}>
        <Typography variant="body1" fontWeight="bold" textAlign="center">Recent Transactions</Typography>
        <Box sx={classes.main_content_dashboard_recent_transactions_column_names_container}>
            <Typography variant="body1" fontWeight="bold">User / Id</Typography>
            <Typography variant="body1" fontWeight="bold">Date</Typography>
            <Typography variant="body1" fontWeight="bold">Cost</Typography>
          </Box>
        <Divider sx={classes.main_content_divider} />

        {/* All Recent Transactions */}
        {mockTransactions.map((transaction, index) => (
          <Box key={index}>
            <Box sx={classes.main_content_dashboard_transaction_container}>
              <Box>
                <Typography variant="body1" fontWeight="bold" color="primary.main">{transaction.txId}</Typography>
                <Typography variant="body1" fontWeight="bold">{transaction.user}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" fontWeight="bold">{transaction.date}</Typography>
              </Box>
              <Button variant="contained" sx={classes.main_content_dashboard_button}>{transaction.cost}</Button>
            </Box>
            <Divider sx={classes.main_content_divider}/>
          </Box>
        ))}  
      </Box>
    </Paper>
  </Grid>
);

export default MainContent;
