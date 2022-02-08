import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GUVI
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            GAB organization
          </Typography>
          <Typography variant="h5" component="div">
            Tamilnadu
          </Typography>
          <Typography variant="body2">
            Good Food Good Life
            <br />
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Contact us</Button>
        </CardActions>
      </Card>
      <br></br>
      <Stack direction="row" spacing={3} sx={{ ml: 1.5 }}>
        <Button variant="contained"><Link to="/AdminLogin"   style={{textDecoration:"none" ,color:"white"}}>Admin Login</Link> </Button>
        <Button variant="contained"><Link to="/StudentLogin" style={{textDecoration:"none" ,color:"white"}}>Student Login</Link></Button>
      </Stack>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node Js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Box
        style={{
          height: 100,
          left: "0",
          bottom: "0",
          marginTop: "35%",
          width: "100%",
          backgroundColor: "#1876D1",
          borderRadius: "4px",
        }}
      >
        <Stack direction="row" spacing={4} sx={{ ml: 1.5,pt:5.5 }}>
          <Link to="/About" style={{ color: "white" ,textDecoration:"none" }}>
            {" "}
            About us
          </Link>
          <Link to="/Contactus" style={{ color: "white",textDecoration:"none" }}>
            {" "}
            Contact us
          </Link>
          <Link to="/Branches" style={{ color: "white" ,textDecoration:"none" }}>
            {" "}
            Branches
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}