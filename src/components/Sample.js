import React, { PureComponent } from 'react';
import { createModel, globalize, M } from '../../lib/index';

class Sample extends PureComponent {
  render() {
    const x = createModel();
    globalize(x);
    console.log(x.getData('1'));

    return (
      <div>
        It will be great someday 🙆
      </div>
    );
  }
}


export default Sample;
