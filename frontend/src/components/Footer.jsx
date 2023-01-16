import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../styles/footer";
import SendIcon from "@mui/icons-material/Send";


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
            TechTitans aims to bring creative solutions to help aspiring techies to determine their career paths in the tech industry through increasing outreach to the student population. We hope to give users a customized exprience in navigating through their journey to clinch their desired jobs.
          </Typography>

          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            
            <FacebookIcon sx={{ mr: 1 }} />
          <TwitterIcon sx={{ mr: 1 }} />
          <InstagramIcon />          </Box>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            
            Copyright © 2023 All Rights Reserved by TechTitans
          </Box>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}