import { Column } from '@ant-design/plots';
import { useAppSelector } from '../store/hook';
import { Transaction } from '../store/transactionsSlice';

export const ColumnCard = () => {
  const transactions = useAppSelector((state) => state.transactions.value);
  const config = {
    data: transactions,
    xField: 'date',
    yField: 'amount',
    // label: {
    //   position: 'middle',
    //   style: {
    //     fill: '#FFFFFF',
    //     opacity: 0.6,
    //   },
    // },
  };

  if (transactions && transactions.length > 0) {
    return <Column {...config} />;
  } else return <div>No transactions</div>;
};
