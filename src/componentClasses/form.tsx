import * as React from 'react';
import { Form, FormProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Form',
    name: 'Form 表单',
    isContainer: true,
    editors: [
      '组件属性',
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
    ],
  };

  public labelAlign = 'left';

  public style: React.CSSProperties = { padding: 5, minHeight: 40 };
}

export class FormComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props: FormProps = (this.props as unknown) as FormProps;
    return <Form {...props} />;
  }
}
