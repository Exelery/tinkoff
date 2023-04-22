import { Column } from '@ant-design/plots';

type Transactions = {
  sum: number;
  date: string;
  category: string;
  type: 'minus' | 'add';
};

const transactions: Transactions[] = [
  {
    sum: 100,
    date: '2023-04-22T12:00:00.000Z',
    category: 'groceries',
    type: 'minus',
  },
  {
    sum: 200,
    date: '2023-04-22T12:00:00.000Z',
    category: 'salary',
    type: 'add',
  },
  {
    sum: 50,
    date: '2023-04-22T12:00:00.000Z',
    category: 'entertainment',
    type: 'minus',
  },
  {
    sum: 300,
    date: '2023-04-22T12:00:00.000Z',
    category: 'rent',
    type: 'minus',
  },
  {
    sum: 150,
    date: '2023-04-22T12:00:00.000Z',
    category: 'bonus',
    type: 'add',
  },
];
const data = [
  {
    sum: 100,
    date: '29',
    category: 'groceries',
    type: 'minus',
  },
  {
    sum: 200,
    date: '26',
    category: 'salary',
    type: 'add',
  },
  {
    sum: 50,
    date: '25',
    category: 'entertainment',
    type: 'minus',
  },
  {
    sum: 300,
    date: '23',
    category: 'rent',
    type: 'minus',
  },
  {
    sum: 150,
    date: '22',
    category: 'bonus',
    type: 'add',
  },
];
const config = {
  data,
  xField: 'date',
  yField: 'sum',
  label: {
    position: 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
};

export const ColumnCard = () => {
  return <Column {...config} />;
};
