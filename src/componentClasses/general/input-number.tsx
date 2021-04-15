import * as React from 'react';
import { InputNumber, InputNumberProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'InputNumber',
    name: 'InputNumber 数字输入',
    isContainer: false,
    group: 'General',
    editors: [
      '组件属性',
      {
        text: '禁用',
        field: 'disabled',
        type: 'boolean',
      },
      {
        text: '启用键盘快捷',
        field: 'keyboard',
        type: 'boolean',
      },
      {
        text: '最大值',
        field: 'max',
        type: 'number',
      },
      {
        text: '最小值',
        field: 'min',
        type: 'number',
      },
      {
        text: '只读',
        field: 'readOnly',
        type: 'boolean',
      },
      {
        text: '改变步数',
        field: 'step',
        type: 'number',
      },
    ],
  };

  public keyboard = true;

  public style: React.CSSProperties = { width: '100%' };
}

export class InputNumberComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as InputNumberProps;
    return <InputNumber {...props} />;
  }
}
