/** @jsx h */
import Preact, { h } from 'preact';

interface PreactComponentProps {
  type: string
}

export const PreactComponent = (props: PreactComponentProps): Preact.JSX.Element => {
  const {type} = props;
  return (
    <h1>{`This is a ${type} Component`}</h1>
  );
}
