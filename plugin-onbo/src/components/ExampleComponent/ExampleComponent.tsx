import React, { useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import { MainForm } from '../Formulario1/MainForm';
import { LoginDialog } from '../Formulario1/LoginDialog';

export const ExampleComponent = () => {

  const { entity } = useEntity();
  const en = entity.metadata.name;

  return (
    <Page themeId="service">
      <Header title={`Crear Nuevo Elemento Promocinal en ${en}`}>
      </Header>
      <Content>
        <ContentHeader>
          <Button variant='contained' color='primary'>Iniciar Sesión ONBO</Button>
        </ContentHeader>
        <Grid container spacing={5} direction="row">
          <Grid item xs={12} sm={12} md={6}>
            <InfoCard title="Añadir Elemento Promocional">
              <MainForm/>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <InfoCard title="Añadir Usuario">
              <MainForm/>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
