import './index.scss';
import { Affix, Button, Drawer, Layout } from 'antd';
import { Dashboard } from '../components/Dashboard';
import { useState } from 'react';
import { AddTransaction } from '../components/AddTransaction';

const { Content } = Layout;

export const App = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="flex flex-col justify-stretch h-full">
      <Content className="p-4">
        <Affix className="fixed right-2 bottom-2 ">
          <div className="flex flex-col gap-1">
            <Button
              type="primary"
              onClick={showDrawer}
              className=" border-blue-800 rounded-full bg-blue-800 text-white"
            >
              Menu
            </Button>
            <Button
              type="primary"
              onClick={showModal}
              className=" border-blue-800 rounded-full bg-blue-800 text-white text-center"
            >
              +
            </Button>
          </div>
        </Affix>

        <Dashboard />
      </Content>
      <AddTransaction isModalOpen={isModalOpen} closeModal={closeModal} />
      {/* <Footer style={footerStyle}>created by</Footer> */}
      <Drawer
        title="Basic Drawer"
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
        key={'left'}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout>
  );
};
