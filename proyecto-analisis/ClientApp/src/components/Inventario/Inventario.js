import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Form, Button, Table } from "semantic-ui-react";
import "./Inventario.css";

export class Inventario extends Component {
  static displayName = Inventario.name;

  render() {
    function back() {
      window.history.back();
    }
    document.body.style = "background: #e5dccf;";

    return (
      <>
        <div>
          <Container className="header-content-inventario">
            <Grid container spacing={2} className="grid-padre-inventario">
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
                    <Icon name="clipboard list" /> Inventario
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-inventario">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Crear / Editar Producto</h2>
              <Form>
                <Form.Group>
                  <Form.Input
                    label="Nombre del producto"
                    placeholder="Nombre del producto"
                    width={16}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Categoría"
                    placeholder="Categoría"
                    width={8}
                  />
                  <Form.Input
                    label="Cantidad"
                    placeholder="Cantidad"
                    width={8}
                  />
                </Form.Group>
                <Form.TextArea
                  label="Descripción"
                  placeholder="Descripción..."
                />
                <Button type="submit" color="teal">
                  Guardar
                </Button>
              </Form>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Lista de Productos</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Categoría</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Lapicero</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>200</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Escritorio</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>100</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sillas</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>300</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
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
