import { Box, IconButton, Typography } from '@mui/material'
import classes from './MiniDashboardStyles'

const MiniDashboard = ({ IconComponent, sales_amount, header, percentage, marginLeft }) => {
  return (
    // mini dashboards
    <Box sx={classes.main_content_dashboard_sales_client_traffic_item} marginLeft={marginLeft}>
      <IconButton sx={{ justifyContent: 'start'}}><IconComponent color="primary" /></IconButton>
      <Typography variant="body1" fontWeight="bold">{sales_amount}</Typography>
      <Box sx={classes.main_content_dashboard_sales_clients_trash_percentage}>
        <Typography variant="body2" flexGrow={1}>{header}</Typography>
        <Typography paddingRight="1rem">{percentage}</Typography>
      </Box>
    </Box>
  )
}

export default MiniDashboard
