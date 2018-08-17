import { List } from 'antd';
import React from 'react';
import { connect } from 'react-redux'
import ListFooter from './footer';
/* import component */
import Contact from './item';
import { getStakeholders, selectedStakeholder } from '../../actions';


/**
 * Contacts list component
 *
 * @function
 * @name ContactsList
 *
 * @param {Object} props - data which is an array of contacts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ContactsList extends React.Component {
  componentDidMount() {
    const { triggerGetStakeholders } = this.props;
    triggerGetStakeholders();
  }

  render() {
    const { stakeholders, clickedStakeholder } = this.props;
    return (
      <React.Fragment>
        <div className="content scrollable">
          <List
            itemLayout="horizontal"
            dataSource={stakeholders}
            renderItem={item => (
              <Contact stakeholder={item} clickedStakeholder={clickedStakeholder} />)}
          />
        </div>
        <ListFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => (
  { stakeholders: state.contacts.data });
const mapDispatchToProps = dispatch => ({
  triggerGetStakeholders: () => dispatch(getStakeholders()),
  clickedStakeholder: stakeholder => dispatch(selectedStakeholder(stakeholder)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
