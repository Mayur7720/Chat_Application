import Grid from "@mui/material/Grid2";
import { Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        sx={{
          xs: "none",
          sm: "block",
        }}
        size={{ md: 3, sm: 4, lg: 3 }}
        height="100%"
      >
        <Skeleton variant="reactangular" height={"100vh"} />
      </Grid>
      <Grid
        sx={{
          xs: "none",
          sm: "block",
        }}
        size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
        height="100%"
      >
        <Stack spacing="1rem">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Skeleton height={"5rem"} variant="rounded" key={idx} />
          ))}
        </Stack>
      </Grid>
      <Grid
        height={"100%"}
        sx={{
          xs: "none",
          sm: "block",
          padding: "2rem",
        }}
        size={{ md: 4, lg: 3 }}
      >
        <Skeleton variant="reactangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
