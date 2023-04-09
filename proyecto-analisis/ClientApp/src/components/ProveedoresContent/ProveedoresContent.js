import * as React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card } from "semantic-ui-react";
import "./ProveedoresContent.css";

export default function ProveedoresContent() {
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
        <Container className="header-content-proveedores">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="users" /> Proveedores</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-proveedores">
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
              <Box display="flex" justifyContent="center"></Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
    /* <div>
      <div className="content-title-proveedores">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
          </Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container-cotizaciones">
              <span>
                <Icon name="users" />
                <b> Proveedores</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      <div className="cont-grid-proveedores">
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            
            <Grid.Column>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div> */
    /* <div className="proveedores-content-grid">
      <div className="container">
        <Grid columns="one">
          <Grid.Row>
          <Grid.Column
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                <Icon bordered name="file outline" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Cotizaciones</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div> */
  );
}
