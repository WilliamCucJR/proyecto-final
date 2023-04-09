import * as React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card } from "semantic-ui-react";
import "./ComprasContent.css";

export default function ComprasContent() {
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
        <Container className="header-content-compras">
          <Grid container spacing={2} className="grid-padre-compras">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="shop" /> Compras</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-compras">
        <Container>
          <Grid container spacing={2}>
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
                name="inventario"
              >
                <Icon
                  bordered
                  name="clipboard list"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Inventario</Card.Header>
                </Card.Content>
              </Card>
                </Item>
              </Box>
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
                name="cotizaciones"
              >
                <Icon
                  bordered
                  name="file outline"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Cotizaciones</Card.Header>
                </Card.Content>
              </Card>
                </Item>
              </Box>
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
                name="ordenes-compra"
              >
                    <Icon
                      bordered
                      name="shop"
                      size="massive"
                      color="grey"
                    />
                    <Card.Content>
                      <Card.Header>Ordenes de Compra</Card.Header>
                    </Card.Content>
                  </Card>
                </Item>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
