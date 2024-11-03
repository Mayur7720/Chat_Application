import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { CustomInputTag } from "../components/Ui/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
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
              onSubmit={handleLogin}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
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
              onSubmit={handleSignUp}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                {avatar.error && (
                  <Typography color="error" varient="caption">
                    {avatar.error}
                  </Typography>
                )}
                <Avatar
                  src={avatar.preview}
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                {/* <IconButton
                  sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                > */}
                <CameraAlt />
                <input type="file" onChange={avatar.file} />
                {/* </IconButton> */}
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                name={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                name={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" varient="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {/* {password.error && (
                <Typography color="error" varient="caption">
                  {password.error}
                </Typography>
              )} */}
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
