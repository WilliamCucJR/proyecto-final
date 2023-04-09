import React, { Component } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Form, Button, Icon, Table } from "semantic-ui-react";
import "./OrdenesCompra.css";

export class OrdenesCompra extends Component {
  static displayName = OrdenesCompra.name;


  render() {

    function back(){
      window.history.back();
    }
  
    return (
      <>
        <div>
          <Container className="header-content-ordenes-compra">
            <Grid container spacing={2} className="grid-padre-ordenes-compra">
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
                    <Icon name="clipboard list" /> Órdenes de Compra
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-ordenes-compra">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <h2>Crear / Editar Orden de Compra</h2>
                <Form>
                  <Form.Group>
                    <Form.Input
                      label="Solicitante"
                      placeholder="Solicitante"
                      width={16}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      label="Departamento"
                      placeholder="Departamento"
                      width={8}
                    />
                    <Form.Input
                      label="Puesto"
                      placeholder="Puesto"
                      width={8}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      label="Producto"
                      placeholder="Producto"
                      width={8}
                    />
                    <Form.Input
                      label="Cantidad"
                      placeholder="Cantidad"
                      width={8}
                    />
                  </Form.Group>
                  
                  <Button type="submit" color="teal">
                    Guardar
                  </Button>
                </Form>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <h2>Lista de Ordenes de Compra</h2>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>No. Orden</Table.HeaderCell>
                      <Table.HeaderCell>Estatus</Table.HeaderCell>
                      <Table.HeaderCell>Producto</Table.HeaderCell>
                      <Table.HeaderCell>Cantidad</Table.HeaderCell>
                      <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
  
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>0000001</Table.Cell>
                      <Table.Cell><Icon name="warning" />Pendiente</Table.Cell>
                      <Table.Cell>Escritorios</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                      <Table.Cell className="centered-button">
                          <Button color='yellow' icon><Icon name="edit outline" /></Button>
                          <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row positive>
                      <Table.Cell>0000002</Table.Cell>
                      <Table.Cell>
                        <Icon name="checkmark" />
                        Aprovada
                      </Table.Cell>
                      <Table.Cell>Monitores</Table.Cell>
                      <Table.Cell>20</Table.Cell>
                      <Table.Cell className="centered-button">
                          <Button color='yellow' icon><Icon name="edit outline" /></Button>
                          <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>0000003</Table.Cell>
                      <Table.Cell><Icon name="warning" />Pendiente</Table.Cell>
                      <Table.Cell>Pizarrones</Table.Cell>
                      <Table.Cell>78</Table.Cell>
                      <Table.Cell className="centered-button">
                          <Button color='yellow' icon><Icon name="edit outline" /></Button>
                          <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row negative>
                      <Table.Cell>0000004</Table.Cell>
                      <Table.Cell>
                        <Icon name="x" />
                        Rechazada
                      </Table.Cell>
                      <Table.Cell>Sillas</Table.Cell>
                      <Table.Cell>12</Table.Cell>
                      <Table.Cell className="centered-button">
                          <Button color='yellow' icon><Icon name="edit outline" /></Button>
                          <Button color='red' icon><Icon name="trash alternate outline" /></Button>
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
