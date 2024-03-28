import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Container } from "@mui/material";
import CakeSection from "./components/CakeSection";
import ContactUs from "./components/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Navbar/>
   <Container>
        <HeroSection />
        <CakeSection/>
        <ContactUs/>
   </Container> 
   </ThemeProvider>
  );
}

export default App;
