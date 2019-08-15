import * as Preact from 'preact';
import * as React from 'react';

interface WrapperProps {
  Component: Preact.Component;
}

// renders preact component as react component
const Wrapper = ({Component}: WrapperProps): JSX.Element => {
  const anchorRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    Preact.render(Component.render(), anchorRef.current);
  });

  return(
    <div ref={anchorRef}></div>
  );
}

export default Wrapper;
