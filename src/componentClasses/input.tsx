import * as React from 'react';
import { Input, Form, FormItemProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Input',
    name: 'Input 输入框',
    isContainer: false,
    editors: [
      '组件属性',
      {
        text: '字段',
        filed: 'name',
        type: 'string',
      },
      {
        text: '标签',
        field: 'label',
        type: 'string',
      },
      {
        text: '标签对其方式',
        field: 'labelAlign',
        type: 'select',
        data: [
          {
            text: '居左',
            value: 'left',
          },
          {
            text: '居右',
            value: 'right',
          },
        ],
      },
      {
        text: '隐藏',
        field: 'hidden',
        type: 'boolean',
      },
    ],
  };

  public labelAlign = 'left';

  public label = '未定义';
}

export class FormInputComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as FormItemProps;
    return (
      <Form.Item {...props}>
        <Input />
      </Form.Item>
    );
  }
}
