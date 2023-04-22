import React, { useState } from 'react';
// import { Affix, Button, Modal } from 'antd';
import {
  Button,
  Form,
  Input,
  Radio,
  Affix,
  Modal,
  InputNumber,
  DatePicker,
  RadioChangeEvent,
} from 'antd';

export const AddIncome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form.submit;
    onReset();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const options = [
    { label: 'Expense', value: 'expense' },
    { label: 'Income', value: 'income' },
  ];

  const [value3, setValue3] = useState('expense');

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  return (
    <div>
      <Affix className="fixed right-2 bottom-2">
        <Button
          type="primary"
          onClick={showModal}
          className=" border-1 border-blue-800 rounded-full bg-blue-800 text-white"
        >
          +
        </Button>
      </Affix>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="text-black"
      >
        <Form form={form} layout="vertical" autoComplete="off" onFinish={onFinish}>
          <Form.Item label="Switch" valuePropName="checked">
            <Radio.Group
              options={options}
              onChange={onChange3}
              value={value3}
              optionType="button"
            />
          </Form.Item>
          <Form.Item label="Sum" required={true} rules={[{ type: 'number', min: 0 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Category" required={true} rules={[{ type: 'string' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Date" className="flex flex-col">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
