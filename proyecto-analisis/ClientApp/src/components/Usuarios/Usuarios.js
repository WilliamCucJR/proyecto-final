import React, { Component } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Form, Button, Icon, Table, TextArea, Select } from "semantic-ui-react";
import "./Usuarios.css";


export class Usuarios extends Component {
  static displayName = Usuarios.name;

  render() {

      document.body.style = 'background: #e5dccf;';

      const generoOpciones = [
        { key: "m", text: "Masculino", value: "masculino" },
        { key: "f", text: "Femenino", value: "femenino" },
      ];
    
      function back() {
        window.history.back();
      }

      return (
        <>
          <div>
            <Container className="header-content-usuarios">
              <Grid container spacing={2} className="grid-padre-usuarios">
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
                      <Icon name="clipboard list" /> Usuarios
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
              </Grid>
            </Container>
          </div>
          <div className="contenedor-usuarios">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <h2>Crear / Editar Usuario</h2>
                  <Form>
                    <Form.Group>
                      <Form.Input
                        label="Nombre Completo"
                        placeholder="Nombre Completo"
                        width={16}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input label="Usuario" placeholder="Usuario" width={8} />
                      <Form.Input label="Contraseña" placeholder="Contraseña" width={8} />
                    </Form.Group>
                    <Form.Group>
                      <SemanticDatepicker
                        format="DD/MM/YYYY"
                        label="Fecha de Nacimiento"
                        width={3}
                      />
                      <Form.Field
                        control={Select}
                        options={generoOpciones}
                        label={{
                          children: "Genero",
                          htmlFor: "form-select-control-gender",
                        }}
                        placeholder="Genero"
                        search
                        searchInput={{ id: "form-select-control-gender" }}
                        width={12}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        label="Correo"
                        placeholder="Correo"
                        width={8}
                      />
                      <Form.Input
                        label="Numero de Telefono"
                        placeholder="Numero de Telefono"
                        width={8}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        label="Dirección"
                        placeholder="Dirección"
                        width={16}
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Intereses/Hobbies"
                      placeholder="Intereses / Hobbies"
                    />
    
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
                          <Button color="yellow" icon>
                            <Icon name="edit outline" />
                          </Button>
                          <Button color="red" icon>
                            <Icon name="trash alternate outline" />
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
                          <Button color="yellow" icon>
                            <Icon name="edit outline" />
                          </Button>
                          <Button color="red" icon>
                            <Icon name="trash alternate outline" />
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
                          <Button color="yellow" icon>
                            <Icon name="edit outline" />
                          </Button>
                          <Button color="red" icon>
                            <Icon name="trash alternate outline" />
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