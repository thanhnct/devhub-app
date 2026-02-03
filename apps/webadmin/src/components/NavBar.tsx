import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PageIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";

const DRAWER_WIDTH = 240;

function NavBar() {
  const location = useLocation();
  const menuItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Page 2", path: "/page-2", icon: <PageIcon /> },
    { label: "Logout", path: "/login", icon: <LogoutIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          mt: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Menu
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.path}
            selected={location.pathname === item.path}
            sx={{
              backgroundColor:
                location.pathname === item.path
                  ? "rgba(0, 0, 0, 0.04)"
                  : "transparent",
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default NavBar;
