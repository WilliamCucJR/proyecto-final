import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Form, Button, Icon, Table, Checkbox, Select } from "semantic-ui-react";
import "./Permisos.css";

export class Permisos extends Component {
  static displayName = Permisos.name;

  render() {
    document.body.style = "background: #e5dccf;";

    function back() {
      window.history.back();
    }

    return (
      <>
        <div>
          <Container className="header-content-permisos">
            <Grid container spacing={2} className="grid-padre-permisos">
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
                    <Icon name="cogs" /> Permisos
                  </span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="contenedor-permisos">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Editar Permisos</h2>
              <Form>
                <Form.Group>
                  <Form.Input
                    label="ID Usuario"
                    placeholder="ID Usuario"
                    width={8}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Nombre"
                    placeholder="Nombre"
                    width={16}
                    readOnly
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Puesto"
                    placeholder="Puesto"
                    width={16}
                    readOnly
                  />
                </Form.Group>
                <br/>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Compras" />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Proveedores" />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Autorizaciones" />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Bodega" />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Contabilidad" />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Checkbox label="Autorización" />
                  </Grid>
                </Grid>
                <br/>
                <Button type="submit" color="teal">
                  Guardar
                </Button>
              </Form>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Lista de Usuarios</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID Usuario</Table.HeaderCell>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                    <Table.HeaderCell>Puesto</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row positive>
                    <Table.Cell>0000001</Table.Cell>

                    <Table.Cell>William Cuc</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow">
                        <Icon name="edit outline" />
                        Editar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>

                    <Table.Cell>Keila Cuc</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow">
                        <Icon name="edit outline" />
                        Editar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000003</Table.Cell>

                    <Table.Cell>Pedro Lopez</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Asistende de Bodega</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow">
                        <Icon name="edit outline" />
                        Editar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell>0000004</Table.Cell>

                    <Table.Cell>Luis Perez</Table.Cell>
                    <Table.Cell>
                      <Icon name="x" />
                      Baja
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow">
                        <Icon name="edit outline" />
                        Editar
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
