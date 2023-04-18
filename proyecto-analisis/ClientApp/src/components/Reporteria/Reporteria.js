import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card, Button, Image } from "semantic-ui-react";

import "./Reporteria.css";

export class Reporteria extends Component {
  static displayName = Reporteria.name;

  render() {
    function back() {
      window.history.back();
    }
    return (
      <>
        <div>
          <Container className="header-content-reporteria">
            <Grid container spacing={2} className="grid-padre-reporteria">
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                <Box display="flex" justifyContent="center">
                  <Button
                    icon
                    labelPosition="left"
                    color="teal"
                    size="large"
                    onClick={back}
                  >
                    <Icon name="arrow left" />
                    Atras
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Box display="flex" justifyContent="center">
                  <span>
                    <Icon name="clipboard list" /> Reportes
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-reporteria">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={2}
              xl={2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Meta>Reporte</Card.Meta>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      <Icon name="download" /> Descargar
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
