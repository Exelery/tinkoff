import React, { useState } from 'react';
import { addTransactionshValue } from '../store/transactionsSlice';
import { useAppDispatch } from '../store/hook';
import { Form, Input, Radio, Modal, InputNumber, DatePicker } from 'antd';

type IForm = {
  amount: number;
  category: string;
  date: Date;
  name: string;
  type: 'expense' | 'income';
};

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const AddTransaction: React.FC<Props> = ({ isModalOpen, closeModal }) => {
  const [form] = Form.useForm();
  const onFinish = (values: IForm) => {
    console.log('Success:', values);
    closeModal();
    onReset();
    dispatch(
      addTransactionshValue({
        value: {
          ...values,
          amount: values.type === 'expense' ? -Math.abs(values.amount) : values.amount,
          id: Date.now().toString(),
          date: values.date.toISOString().slice(0, 10),
        },
      })
    );
  };

  const dispatch = useAppDispatch();

  const initial = {
    type: 'expense',
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={closeModal}
        className="text-black"
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={initial}
        >
          <Form.Item label="Choose type" name="type">
            <Radio.Group optionType="button">
              <Radio value="expense">Expense</Radio>
              <Radio value="income"> Income </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name" required={true} rules={[{ type: 'string' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            required={true}
            rules={[{ type: 'number', min: 0 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item label="Category" name="category" required={true} rules={[{ type: 'string' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date" name="date" className="flex flex-col">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
