import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Icon, Table } from "semantic-ui-react";
import "./Facturas.css";

export class Facturas extends Component {
  static displayName = Facturas.name;

  render() {
    function back() {
      window.history.back();
    }
    return (
      <>
        <div className="header-content-facturas">
          <Container>
            <Grid container spacing={2} className="grid-padre-facturas">
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
                    <Icon name="file outline" /> Facturas
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-facturas">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>Lista de Facturas</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No. Factura</Table.HeaderCell>
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
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Pagada
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
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
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>0000004</Table.Cell>
                    <Table.Cell>Proveedor 2</Table.Cell>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="warning" />
                      Pendiente
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
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
