import * as React from 'react';
import { DatePicker, DatePickerProps } from 'antd';

export class Props {
  public editSetting = {
    key: 'DatePicker',
    name: 'DatePicker 日期选择',
    isContainer: false,
    group: 'General',
    editors: [
      '组件属性',
      {
        text: '日期格式',
        field: 'format',
        type: 'string',
      },
      {
        text: '显示此刻',
        field: 'showNow',
        type: 'boolean',
      },
      {
        text: '时间选择',
        field: 'showTime',
        type: 'boolean',
      },
      {
        text: '展现今天',
        field: 'showToday',
        type: 'boolean',
      },
    ],
  };

  public keyboard = true;

  public style: React.CSSProperties = { width: '100%' };
}

export class DatePickerComponent extends React.Component<IGaeaProps, any> {
  public static defaultProps = new Props();

  public render() {
    const props = (this.props as unknown) as DatePickerProps;
    return <DatePicker {...props} />;
  }
}
