import * as React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card } from "semantic-ui-react";

import "./BodegaContent.css";

export default function BodegaContent() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div>
        <Container className="header-content-bodega">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="factory" /> Bodega</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-bodega">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Box display="flex" justifyContent="center"></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Box display="flex" justifyContent="center">
                <Item>
                  <Card
                    onClick={handleItemClick}
                    className="card"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                      borderRadius: 10,
                      on: "hover",
                    }}
                    name="recepcion-pedido"
                  >
                    <Icon
                      bordered
                      name="shop"
                      size="massive"
                      color="grey"
                    />
                    <Card.Content>
                      <Card.Header>Recepción de Pedido</Card.Header>
                    </Card.Content>
                  </Card>
                </Item>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Box display="flex" justifyContent="center"></Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
