import * as React from 'react';
import { Input, InputProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Input',
    name: 'Input 输入框',
    isContainer: false,
    group: 'General',
    editors: [
      '组件属性',

      {
        text: '最大长度',
        field: 'maxLength',
        type: 'number',
      },
      {
        text: '禁用',
        field: 'disabled',
        type: 'boolean',
      },
      {
        text: '占位符',
        field: 'placeholder',
        type: 'string',
      },
    ],
  };
}

export class InputComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as InputProps;
    return <Input {...props} />;
  }
}
