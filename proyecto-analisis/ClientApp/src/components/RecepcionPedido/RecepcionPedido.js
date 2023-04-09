import React, { Component } from "react";
import {
  Form,
  Button,
  Icon,
  Select,
  Input,
  TextArea
} from "semantic-ui-react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./RecepcionPedido.css";

export class RecepcionPedido extends Component {
    static displayName = RecepcionPedido.name;
  
    render() {
      function back() {
        window.history.back();
      }

      const genderOptions = [
        { key: "m", text: "000001", value: "male" },
        { key: "f", text: "000002", value: "female" },
        { key: "o", text: "000003", value: "other" },
      ];
    
      return (
        <>
          <div>
            <Container className="header-content-recepcion-pedido">
              <Grid container spacing={2} className="grid-padre-recepcion-pedido">
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
                      <Icon name="shop" /> Recepción de pedido
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
              </Grid>
            </Container>
          </div>
          <div className="contenedor-recepcion-pedido">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <h2>Recepción de pedido</h2>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{
                          children: "Orden No.",
                          htmlFor: "form-select-control-gender",
                        }}
                        placeholder="Gender"
                        search
                        searchInput={{ id: "form-select-control-gender" }}
                      />
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Proveedor"
                        placeholder="Proveedor"
                      />
                      <SemanticDatepicker
                        label="Fecha"
                        format="DD/MM/YYYY"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Quien entrega?"
                        placeholder="Quien entrega?"
                      />
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Quien recibe?"
                        placeholder="Quien recibe?"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Hora"
                        placeholder="Hora"
                        width={3}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Producto"
                        placeholder="Producto"
                      />
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Código"
                        placeholder="Código"
                      />
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="Cantidad"
                        placeholder="Cantidad"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="No. Factura"
                        placeholder="No. Factura"
                      />
                    </Form.Group>
    
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Observaciones"
                      placeholder="Observaciones"
                    />
                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Guardar"
                      color="teal"
                    />
                  </Form>
              </Grid>
            </Grid>
          </div>
        </>
      );
    }

  
}
