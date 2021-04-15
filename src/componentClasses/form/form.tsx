import * as React from 'react';
import { Form, FormProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Form',
    name: 'Form 表单',
    isContainer: true,
    group: 'Form',
    editors: [
      '组件属性',
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
      }, {
        text: '布局',
        field: 'layout',
        type: 'select',
        data: [{
          text: '水平布局',
          value: 'horizontal'
        }, {
          text: '垂直布局',
          value: 'vertical'
        }, {
          text: '内联布局',
          value: 'inline'
        }]
      }
    ],
  };

  public labelAlign = 'left';
  public layout = 'horizontal'
  public style: React.CSSProperties = { padding: 5, minHeight: 40 };
}

export class FormComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props: FormProps = (this.props as unknown) as FormProps;
    return <Form {...props} />;
  }
}
