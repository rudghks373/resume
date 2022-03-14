import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col>
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>
              <br />
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              <br />
              {payload.version}
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
