import styled from "@emotion/styled";
import {
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../styles/theme";
import {  FooterTitle } from '../styles/footer';

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dignissimos laudantium beatae! Sequi a nihil id ex. Eaque, ut rerum dolorum eligendi quo, amet aperiam ab deleniti sed magnam cum.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            Copyright © 2023 All Rights Reserved by TECHTITIANS
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}