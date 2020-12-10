import React from 'react';
import { Container } from 'reactstrap';

export default function Layout({ children }) {
  return (
    <Container fluid="xl" style={{ padding: '20px' }}>
      {children}
    </Container>
  );
}
