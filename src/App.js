import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import "./App.css";
import Header from "./components/Header/Header";
import LocationCards from "./components/LocationCard/LocationCards";
import OptionsTab from "./components/OptionTabs/OptionTabs";
import { displayOnDesktop } from './Themes/commonStyles.js';
import MobileFooter from "./components/Footer/MobileFooter";
import FooterMenu from "./components/Footer/FooterMenu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
