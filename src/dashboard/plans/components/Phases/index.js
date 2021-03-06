import { Button, Col, Drawer, Dropdown, Icon, Layout, Menu, Row } from 'antd';
import React, { Component } from 'react';
import Select from '../../../../common/components/Select';
import Phase from './components/Phase';

/* local constants */
const { Header, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="file-pdf" />
      PDF
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="file-excel" />
      Excel
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="file-text" />
      CSV
    </Menu.Item>
  </Menu>
);

// fake options
const options = [
  { label: 'Flood', value: 'flood' },
  { label: 'Fire', value: 'fire' },
  { label: 'Epidemic', value: 'epidemic' },
];

// fake Plan actions
const planActions = [
  { name: 'Clean Up', incident: 'Flood', taskCount: 120 },
  {
    name: 'Teach Risk education in schools',
    incident: 'Flood',
    taskCount: 30,
  },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
  { name: 'Public Risk awareness campaign', incident: 'Flood', taskCount: 110 },
];

/**
 * Plan Components which arrange plan actions according to their phases
 *
 * @class
 * @name Phases
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class Phases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDrawer: false,
    };

    this.onCloseDrawer = this.onCloseDrawer.bind(this);
    this.onOpenDrawer = this.onOpenDrawer.bind(this);
  }

  onCloseDrawer() {
    this.setState({ visibleDrawer: false });
  }

  onOpenDrawer() {
    this.setState({ visibleDrawer: true });
  }

  render() {
    const { visibleDrawer } = this.state;
    return (
      <Layout
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* start primary header */}
        <Header
          style={{
            background: '#fff',
            paddingLeft: 10,
            borderBottom: '1px solid #E0E0E0',
            flexBasis: '50px',
          }}
        >
          <h3>Plans</h3>
        </Header>
        {/* end primary header */}
        {/* start secondary header */}
        <Header
          style={{
            background: '#fff',
            paddingLeft: 10,
            borderBottom: '1px solid #E0E0E0',
            flexBasis: '50px',
          }}
        >
          <Row justify="space-around">
            {/* start filters */}
            <Col span={20}>
              <Row>
                <Col span={4}>
                  <Select
                    options={options}
                    placeholder="Select Incident type"
                    style={{ width: 250 }}
                  />
                </Col>
              </Row>
            </Col>
            {/* end filters */}
            {/* start actions */}
            <Col span={4}>
              <Row>
                <Col span={12}>
                  <Button
                    icon="plus"
                    type="primary"
                    onClick={this.onOpenDrawer}
                  >
                    New Action
                  </Button>
                </Col>
                <Col span={12}>
                  <Dropdown overlay={menu}>
                    <Button style={{ marginLeft: 8 }} type="primary">
                      <Icon type="export" />
                      Export
                      <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
            {/* end actions */}
          </Row>
        </Header>
        {/* end secondary header */}
        {/* start plan actions */}
        <Content style={{ backgroundColor: '#fff', flex: '1 0' }}>
          <Row>
            <Col span={6}>
              <Phase title="Mitigation" count={20} actions={planActions} />
            </Col>
            <Col span={6}>
              <Phase title="Preparedness" count={5} actions={planActions} />
            </Col>
            <Col span={6}>
              <Phase title="Response" count={30} />
            </Col>
            <Col span={6}>
              <Phase title="Recovery" count={40} />
            </Col>
          </Row>
        </Content>
        {/* end plan actions */}
        {/* Drawer for plan form */}
        <Drawer
          title="New Action"
          placement="right"
          width="600px"
          onClose={this.onCloseDrawer}
          visible={visibleDrawer}
        />
        {/* end Drawer for plan form */}
      </Layout>
    );
  }
}
