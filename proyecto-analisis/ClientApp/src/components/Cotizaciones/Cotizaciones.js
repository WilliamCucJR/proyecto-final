import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Icon, Table } from "semantic-ui-react";
import "./Cotizaciones.css";

export class Cotizaciones extends Component {
  static displayName = Cotizaciones.name;

  render() {
    function back() {
      window.history.back();
    }
    return (
      <>
        <div className="header-content-cotizaciones">
          <Container>
            <Grid container spacing={2} className="grid-padre-cotizaciones">
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
                    <Icon name="file outline" /> Cotizaciones
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-cotizaciones">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h2>Lista de Cotizaciones</h2>
              <Button positive>
                Crear Cotización <Icon name="plus" />
              </Button>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No. Cotización</Table.HeaderCell>
                    <Table.HeaderCell>Proveedor</Table.HeaderCell>
                    <Table.HeaderCell>No. Orden de compra</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>
                      <Icon name="warning" />
                      Pendiente
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="blue">
                        <Icon name="eye" /> Ver
                      </Button>
                      <Button color="orange">
                        <Icon name="trash alternate outline" /> Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Aprovada
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="blue">
                        <Icon name="eye" /> Ver
                      </Button>
                      <Button color="orange">
                        <Icon name="trash alternate outline" /> Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>0000003</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="warning" />
                      Pendiente
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="blue">
                        <Icon name="eye" /> Ver
                      </Button>
                      <Button color="orange">
                        <Icon name="trash alternate outline" /> Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell>0000004</Table.Cell>
                    <Table.Cell>Proveedor 2</Table.Cell>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="x" />
                      Rechazada
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="blue">
                        <Icon name="eye" /> Ver
                      </Button>
                      <Button color="orange">
                        <Icon name="trash alternate outline" /> Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
