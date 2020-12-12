import React from 'react';
import App from '../../App';
import Navbar from '../../components/Navbar';

import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'; // snapshot testing

describe('App tests', () => {
  // snapshot
  test('renders snapshot', () => {
    const app = renderer.create(<App />);
    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders <App> component correctly', () => {
    shallow(<App />);
  });

  it('renders Navbar in App component', () => {
    let app = shallow(<App />);
    expect(app.find(Navbar).length).toEqual(1);
  });

  it('renders 1 menu items correctly', () => {
    let app = mount(<App />);
    // console.log(app.debug());
    expect(app.find('.menu').length).toEqual(1);
  });

  it('renders first li element correctly', () => {
    let app = mount(<App />);
    expect(app.find('a').at(0).text()).toBe('Home');
  });
});
