import NxWelcome from "./nx-welcome";

import { Route, Routes, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Login from "../features/auth/Login";

export function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            @devhub/webadmin
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/page-2">
            Page 2
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {/* START: routes */}
        <Routes>
          <Route path="/" element={<NxWelcome title="@devhub/webadmin" />} />
          <Route
            path="/page-2"
            element={
              <div>
                This is the generated root route.{" "}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* END: routes */}
      </Container>
    </Box>
  );
}

export default App;
