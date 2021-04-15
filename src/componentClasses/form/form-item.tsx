import * as React from 'react';
import { Input, Form, FormItemProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'FormItem',
    name: 'FormItem 表单字段',
    isContainer: true,
    group: 'Form',
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
        text: '对其方式',
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
      },{
        text: '冒号',
        field: 'colon',
        type: 'boolean'
      },
      {
        text: '隐藏',
        field: 'hidden',
        type: 'boolean',
      },{
        text: '必填',
        field: 'required',
        type: 'boolean',
      }
    ],
  };

  public labelAlign = 'left';
  public label = '未定义';
  public colon = true;
}

export class FormItemComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as FormItemProps;
    return (
      <Form.Item {...props} />
    );
  }
}
