import * as React from 'react';

interface ReactComponentProps {
  type: string
}

export const ReactComponent = (props: ReactComponentProps): JSX.Element => {
  const {type} = props;
  return (
    <h1>{`This is a ${type} Component`}</h1>
  );
}
