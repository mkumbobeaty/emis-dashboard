import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Button } from 'antd';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

class NewAlertForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  
 
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const rangeConfig = {
      rules: [],
    };

    return (
      <Form onSubmit={this.handleSubmit} className={cx('ant-form-custom-styles')}>
        <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('title', {
            rules: [],
          })(
            <Input size='large' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Source"
          hasFeedback
        >
          {getFieldDecorator('Source', {
            rules: [],
          })(
            <Select size='large' placeholder="Please select a source">
              <Option value="tma">TMA</Option>
              <Option value="tahmo">TAHMO</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Alert Type"
          hasFeedback
        >
          {getFieldDecorator('AlertType', {
            rules: [],
          })(
            <Select size='large' placeholder="Please select a Alert Type">
              <Option value="flood">Flood</Option>
              <Option value="fire">Fire</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Expected Magnitude"
        >
          {getFieldDecorator('ExpectedMagnitude', {
            rules: [],
          })(
            <Input size='large' maxLength="25" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Probable Duration"
        >
          {getFieldDecorator('probable-duration', rangeConfig)(
            <RangePicker size='large' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Region(s)"
        >
          {getFieldDecorator('regions', {
            rules: [],
          })(
            <Input size='large' maxLength="30" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Prone Area(s)"
        >
          {getFieldDecorator('prone-area', {
            rules: [],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Description"
        >
          {getFieldDecorator('description', {
            rules: [],
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
        >
          <Row>
            <Col span={4} offset={8}>
            <Button>Cancel</Button>
            </Col>
            <Col span={8}>
            <Button type="primary" htmlType="submit">Save</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewAlertForm = Form.create()(NewAlertForm);

export default WrappedNewAlertForm;