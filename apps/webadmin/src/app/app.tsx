import Dashboard from "../features/dashboard/Dashboard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Login from "../features/auth/Login";

export function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Box>
      {!isLoginPage && <Header />}

      {!isLoginPage ? (
        <Box sx={{ display: "flex" }}>
          <NavBar />
          <Box sx={{ flex: 1 }}>
            <Container sx={{ mt: 4 }}>
              {/* START: routes */}
              <Routes>
                <Route
                  path="/"
                  element={<Dashboard title="@devhub/webadmin" />}
                />
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
              </Routes>
              {/* END: routes */}
            </Container>
          </Box>
        </Box>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
