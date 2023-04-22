import './index.scss';
import { Affix, Button, Drawer, DrawerProps, Layout, RadioChangeEvent, Space } from 'antd';
import { Dashboard } from '../components/HelloWorld/Dashboard';
import { useState } from 'react';
import { AddIncome } from '../components/HelloWorld/AddIncome';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '100px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  // minHeight: '50vw',
  lineHeight: '30%',
  color: '#fff',
  // backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  // textAlign: 'center',
  // lineHeight: '10%',
  color: '#fff',
  // backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  // textAlign: 'center',
  color: '#fff',
  // backgroundColor: '#7dbcea',
};

export const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <Layout className="flex flex-col justify-stretch h-full">
      {/* <Header style={headerStyle} className="">
        Header
      </Header> */}
      <Content style={contentStyle} className="p-4">
        <Affix offsetTop={10}>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Affix>

        <Dashboard />
      </Content>
      <AddIncome />
      {/* <Footer style={footerStyle}>created by</Footer> */}
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout>
  );
};
