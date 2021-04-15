import * as React from 'react';
import { Col, ColProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Col',
    name: 'Col 列布局',
    isContainer: true,
    group: 'Layout',
    editors: [
      '组件属性',
      {
        text: 'flex 布局属性',
        filed: 'flex',
        type: 'string',
      },
      {
        text: '间隔',
        field: 'offset',
        type: 'number',
      },
      {
        text: '顺序',
        field: 'order',
        type: 'number',
      },
      {
        text: '左移动格数',
        field: 'pull',
        type: 'number',
      },
      {
        text: '右移动格数',
        field: 'push',
        type: 'number',
      },
      {
        text: '占位格数',
        field: 'span',
        type: 'number',
      },
      {
        text: 'xs',
        field: 'xs',
        type: 'number',
      },
      {
        text: 'sm',
        field: 'sm',
        type: 'number',
      },
      {
        text: 'md',
        field: 'md',
        type: 'number',
      },
      {
        text: 'lg',
        field: 'lg',
        type: 'number',
      },
      {
        text: 'xl',
        field: 'xl',
        type: 'number',
      },
      {
        text: 'xxl',
        field: 'xxl',
        type: 'number',
      },
    ],
  };

  public style: React.CSSProperties = { padding: 5, minHeight: 40, minWidth: 50 };
}

export class ColComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as ColProps;
    return <Col {...props} />;
  }
}
