import GaeaComponents from 'gaea-basic-components';
import * as React from 'react';
import Component from '../src/index';
import { FormComponent } from '../src/componentClasses/form/form';
import { FormItemComponent } from '../src/componentClasses/form/form-item';
import { RowComponent } from '../src/componentClasses/layout/row';
import { ColComponent } from '../src/componentClasses/layout/col';
import { InputComponent } from '../src/componentClasses/general/input';
import { ButtonComponent } from '../src/componentClasses/general/button';
import { SwitchComponent } from '../src/componentClasses/general/switch';
import { InputNumberComponent } from '../src/componentClasses/general/input-number';
import { DatePickerComponent } from '../src/componentClasses/general/date-picker';

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
          FormItemComponent,
          RowComponent,
          ColComponent,
          InputComponent,
          ButtonComponent,
          SwitchComponent,
          InputNumberComponent,
          DatePickerComponent,
          GaeaComponents[0],
        ]}
      />
    );
  }
}
