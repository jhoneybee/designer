import * as React from 'react';
import { Row, RowProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Row',
    name: 'Row 行布局',
    isContainer: true,
    editors: [
      '组件属性',
      {
        text: '垂直对齐方式',
        filed: 'align',
        type: 'select',
        data: [
          {
            text: '顶部',
            value: 'top',
          },
          {
            text: '中间',
            value: 'middle',
          },
          {
            text: '底部',
            value: 'bottom',
          },
        ],
      },
      {
        text: '间隔',
        field: 'gutter',
        type: 'number',
      },
      {
        text: '自动换行',
        field: 'wrap',
        type: 'boolean',
      },
    ],
  };

  public labelAlign = 'left';

  public label = '未定义';

  public style: React.CSSProperties = { padding: 5, minHeight: 40 };
}

export class RowComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as RowProps;
    return <Row {...props} />;
  }
}
