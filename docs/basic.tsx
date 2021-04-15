import GaeaComponents from 'gaea-basic-components';
import * as React from 'react';
import Component from '../src/index';
import { FormComponent } from '../src/componentClasses/form';
import { FormInputComponent } from '../src/componentClasses/input';
import { RowComponent } from '../src/componentClasses/row';
import { ColComponent } from '../src/componentClasses/col';

class Props {}

class State {}

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();

  public state = new State();

  public render() {
    return (
      <Component
        onSave={data => {
          console.log('data', data);
        }}
        componentClasses={[
          FormComponent,
          FormInputComponent,
          RowComponent,
          ColComponent,
          GaeaComponents[0],
        ]}
      />
    );
  }
}
