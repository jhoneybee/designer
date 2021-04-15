import * as React from 'react';
import { Button, ButtonProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'Button',
    name: 'Button 按钮',
    isContainer: false,
    group: 'General',
    editors: [
      '组件属性',
      {
        text: '按钮标题',
        field: 'title',
        type: 'string',
      },
      {
        text: '按钮类型',
        field: 'type',
        type: 'select',
        data: [
          {
            text: '主要',
            value: 'primary',
          },
          {
            text: '透明',
            value: 'ghost',
          },
          {
            text: '虚线',
            value: 'dashed',
          },
          {
            text: '链接',
            value: 'link',
          },
          {
            text: '文本',
            value: 'text',
          },
          {
            text: '默认',
            value: 'default',
          },
        ],
      },
      {
        text: '填充最大宽度',
        field: 'block',
        type: 'boolean',
      },
      {
        text: '危险',
        field: 'danger',
        type: 'boolean',
      },
      {
        text: '禁用',
        field: 'disabled',
        type: 'boolean',
      },
      {
        text: '背景透明',
        field: 'ghost',
        type: 'boolean',
      },
      {
        text: '跳转地址',
        field: 'href',
        type: 'string',
      },
      {
        text: '跳转方式',
        field: 'target',
        type: 'string',
      },
    ],
  };

  public title = '未定义';

  public type = 'default';
}

export class ButtonComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const { title, ...restProps } = (this.props as unknown) as ButtonProps;
    return <Button {...restProps}> {title} </Button>;
  }
}
