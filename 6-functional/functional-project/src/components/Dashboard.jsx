import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

export default function Dashboard({ logout }) {
  // props.logout

  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const BASE_URL = "https://swapi.dev/api/";
      try {
        const {
          data: { results },
        } = await axios.get(`${BASE_URL}people`);
        console.log("results", results);
        setCharactersArray(results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchApi();
    // PROMESA THEN CATCH 👉🏽 axios.get(`${BASE_URL}people`).then().catch()
  }, []);

  useEffect(() => {
    console.log("cambia estado", charactersArray);
  }, [charactersArray]);

  // Poner botón de Logout y sacarte del dashboard
  // para renderizar otra vez el Login

  return (
    <>
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
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Star wars dashboard
            </Typography>
            <Tooltip title="Cerrar sesión">
              <Button
                style={{ backgroundColor: "white" }}
                onClick={() => logout()}
                variant="outlined"
              >
                Logout
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ margin: 10 }}>
        <Chip label="Lista de personajes" />
      </div>
      {/* LOADING mientras carga la lista de personajes */}
      {!charactersArray.length ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container spacing={2}>
          {charactersArray.map((element, i) => (
            <Grid item xs={6} md={4} key={i}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Name: {element.name}
                  </Typography>

                  <Typography variant="body2">
                    Height: {element.height}
                    <br />
                    Hair color: {element.hair_color}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
