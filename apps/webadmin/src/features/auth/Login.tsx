import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
// import { useNavigate } from "react-router-dom";

type LoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  // const navigate = useNavigate();
  const [data, setData] = useState<LoginProps>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!data.email || !data.password) {
      setError("Please enter account and password");
      console.log("login attempt failed", {
        email: data.email,
        password: data.password,
      });
      return;
    }
    console.log("login attempt", {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });
    console.log("login success, navigating home");
    //navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 6, p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2, width: "100%" }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={data.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleChange}
            />
            <Checkbox
              name="rememberMe"
              checked={data.rememberMe}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  rememberMe: e.target.checked,
                }))
              }
            />
            Remember me
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
