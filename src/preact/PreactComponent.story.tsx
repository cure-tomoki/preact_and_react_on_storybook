import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { PreactComponent } from './PreactComponent';
import Wrapper from '../util/wrapper';

const type = 'Preact';

storiesOf(type, module).add(`${type}Component`,() => (
  <Wrapper component={PreactComponent({type})}/>
));
