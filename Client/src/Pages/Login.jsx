import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const handleSubmit = () => {};
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5"> Login </Typography>
            <form
              onSubmit={handleSubmit}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              <TextField
                required="true"
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required="true"
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                onClick={toggleLogin}
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5"> Sign Up </Typography>
            <form
              onSubmit={handleSubmit}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              <TextField
                required="true"
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required="true"
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required="true"
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required="true"
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                sx={{ margin: "1rem" }}
                variant="contained"
                color="secondary"
                onClick={toggleLogin}
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
