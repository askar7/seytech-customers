import React from 'react';
import AddCustomer from '../../components/AddCustomer';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'; // snapshot testing

describe('AddCustomer tests', () => {
  // snapshot
  test('renders snapshot', () => {
    const app = renderer.create(<AddCustomer />);
    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('simulate a click', () => {
    let app = mount(<AddCustomer />);
    app.find('button').at(0).simulate('click');
    const modalElement = app.find('.modal-content');
    // console.log(modalElement.debug());
    expect(modalElement).toBeTruthy();
  });
});
