import { Calendar, Card, Col, Row, Space } from 'antd';
import { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import { ColumnCard } from './Column';
import { History } from './History';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

export const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <Card title="All transactions" bordered={false} className="w-[300px]">
        <History />
      </Card>

      <Card title="Reports" bordered={false} className="w-[300px]">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card title="Sheldure" bordered={false} className="w-[400px]">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </Card>
      <Card>
        <ColumnCard />
      </Card>
    </div>
  );
};
