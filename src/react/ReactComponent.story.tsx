import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { ReactComponent } from './ReactComponent';

const type = 'React';

storiesOf(type, module).add(`${type}Component`,() => (
  <ReactComponent type={type} />
));
