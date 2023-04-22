import { useAppSelector } from '../store/hook';
import { removeTransactionshValue } from '../store/transactionsSlice';
import { useAppDispatch } from '../store/hook';
import { Col, Row } from 'antd';

export const History = () => {
  const transactions = useAppSelector((state) => state.transactions.value);

  return (
    <>
      <Row justify={'space-between'}>
        <Col>Name</Col>
        <Col>Amount</Col>
        <Col>Date</Col>
        <Col>Type</Col>
        <Col></Col>
      </Row>
      {transactions.map((el, index) => (
        <Row justify={'space-between'} key={index}>
          <Col>{el.name}</Col>
          <Col>{el.amount}$</Col>
          <Col>{el.date}</Col>
          <Col>{el.type}</Col>
          <Col></Col>
        </Row>
      ))}
    </>
  );
};
