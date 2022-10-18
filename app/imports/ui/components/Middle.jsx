import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Middle = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={8} className="text-center">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Now accepting reservations for St Patrick's Day</h1>
      <h1>Please call 808-531-0422 for reservations</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
    </Col>
  </Row>
);

export default Middle;
