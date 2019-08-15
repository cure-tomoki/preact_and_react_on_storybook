import * as Preact from 'preact';
import * as React from 'react';

// HOC to render preact component in react
const PreactWrapper = <P extends object>(Component: Preact.ComponentConstructor<P>): React.FC<P> => (props: P) => {
  const anchorRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const node = new Component(props).render();
    Preact.render(node, anchorRef.current);
  });

  return(
    <div ref={anchorRef}/>
  );
}

export default PreactWrapper;
