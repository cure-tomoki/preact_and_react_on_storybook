import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { PreactComponent } from './PreactComponent';
import PreactWrapper from '../utils/preactWrapper';

const type = 'Preact';

const Wrapped = PreactWrapper(PreactComponent);

storiesOf(type, module).add(`${type}Component`,() => (
  <Wrapped type={type}/>
));
