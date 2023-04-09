import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import "./HomeContent.css";

import WelcomeImage from "../../img/work_img.png";

export default function HomeContent() {
  return (
    <>
      <div>
        <Container className="header-content-home">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="home" /> Bienvenido</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-home">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
              <Box display="flex" justifyContent="center"></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
              <Box display="flex" justifyContent="center">
                <Image src={WelcomeImage} width={850} centered />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
              <Box display="flex" justifyContent="center"></Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
