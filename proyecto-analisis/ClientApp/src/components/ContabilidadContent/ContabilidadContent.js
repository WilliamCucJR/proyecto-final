import * as React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Icon, Card } from "semantic-ui-react";

import "./ContabilidadContent.css";

export default function ContabilidadContent() {
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
        <Container className="header-content-contabilidad">
          <Grid container spacing={2} className="grid-padre-contabilidad">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box display="flex" justifyContent="center">
                <span><Icon name="calculator" /> Contabilidad</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="contenedor-contabilidad">
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
                name="facturas"
              >
                    <Icon
                      bordered
                      name="file alternate outline"
                      size="massive"
                      color="grey"
                    />
                    <Card.Content>
                      <Card.Header>Facturas</Card.Header>
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
                name="reportes"
              >
                    <Icon
                      bordered
                      name="file outline"
                      size="massive"
                      color="grey"
                    />
                    <Card.Content>
                      <Card.Header>Reportes</Card.Header>
                    </Card.Content>
                  </Card>
                </Item>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
