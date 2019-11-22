import React, { SFC } from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: SFC<HelloProps> = ({ name }) => (
  <>
    <h1>
      Hello <a href="https://balmjs.com/">{name}</a> for TSX
    </h1>
    <p>A Flexible Front-End Workflow</p>
  </>
);
