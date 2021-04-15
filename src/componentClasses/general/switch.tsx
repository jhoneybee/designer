import * as React from 'react';
import { Switch, SwitchProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Switch',
    name: 'Switch 开关',
    isContainer: false,
    group: 'General',
    editors: [
      '组件属性',
      {
        text: '选中',
        field: 'checked',
        type: 'boolean',
      },
      {
        text: '是否禁用',
        field: 'disabled',
        type: 'boolean',
      },
    ],
  };
}

export class SwitchComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const { ...restProps } = (this.props as unknown) as SwitchProps;
    return <Switch {...restProps} />;
  }
}
