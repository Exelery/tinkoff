import { Calendar, Card, Col, Row, Space } from 'antd';
import { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import { ColumnCard } from './Column';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

type Transactions = {
  id: string;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'minus' | 'add';
};

const transactions: Transactions[] = [
  {
    sum: 100,
    date: new Date(),
    category: 'groceries',
    type: 'minus',
  },
  {
    sum: 200,
    date: new Date(),
    category: 'salary',
    type: 'add',
  },
  {
    sum: 50,
    date: new Date(),
    category: 'entertainment',
    type: 'minus',
  },
  {
    sum: 300,
    date: new Date(),
    category: 'rent',
    type: 'minus',
  },
  {
    sum: 150,
    date: new Date(),
    category: 'bonus',
    type: 'add',
  },
];

export const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <Card title="All transactions" bordered={false} className="w-[300px]">
        {transactions.map((el, index) => (
          <p key={index}>
            {el.sum}$ {el.date.toDateString()}
          </p>
        ))}
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
