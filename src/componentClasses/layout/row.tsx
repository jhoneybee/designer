import * as React from 'react';
import { Row, RowProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Row',
    name: 'Row 行布局',
    isContainer: true,
    group: 'Layout',
    editors: [
      '组件属性',
      {
        text: '垂直对齐方式',
        field: 'align',
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
      },{
        text: '水平排列',
        field: 'justify',
        type: 'select',
        data: [
          {
            text: '左边',
            value: 'start',
          },
          {
            text: '右边',
            value: 'end',
          },
          {
            text: '居中',
            value: 'center',
          }, {
            text: '平均分配 - around',
            value: 'space-around',
          },{
            text: '平均分配 - between',
            value: 'space-between',
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
  public justify = 'start';
  public align = 'top';
  public style: React.CSSProperties = { padding: 5, minHeight: 40 };
}

export class RowComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as RowProps;
    return <Row {...props} />;
  }
}
