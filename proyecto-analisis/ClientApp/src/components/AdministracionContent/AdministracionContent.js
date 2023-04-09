import * as React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card } from "semantic-ui-react";

import "./AdministracionContent.css";

export default function AdministracionContent() {
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
        <Container className="header-content-administracion">
          <Grid container spacing={2} className="grid-padre-administracion">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="cog" /> Administración</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-administracion">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
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
                name="usuarios"
              >
                <Icon
                  bordered
                  name="users"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Usuarios</Card.Header>
                </Card.Content>
              </Card>
                </Item>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Box display="flex" justifyContent="center">
                
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
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
                name="permisos"
              >
                <Icon
                  bordered
                  name="cogs"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Permisos</Card.Header>
                </Card.Content>
              </Card>
                </Item>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
    /* <div>
      <div className="content-title-administracion">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
          </Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container-cotizaciones">
              <span>
                <Icon name="cog" />
                <b> Administración</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      <div className="cont-grid-administracion">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
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
                name="usuarios"
              >
                <Icon
                  bordered
                  name="users"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Usuarios</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
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
                name="permisos"
              >
                <Icon
                  bordered
                  name="cogs"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Permisos</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div> */
    /* <div className="administracion-content-grid">
      <div className="container">
        <Grid columns="two">
          <Grid.Row>
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
                name="usuarios"
              >
                <Icon bordered name="users" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Usuarios</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
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
                name="permisos"
              >
                <Icon bordered name="cogs" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Permisos</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div> */
  );
}
