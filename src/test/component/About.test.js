import React from 'react';
import About from '../../components/About';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'; // snapshot testing

describe('App tests', () => {
  // snapshot
  test('renders snapshot', () => {
    const app = renderer.create(<About />);
    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders first header element correctly', () => {
    let app = mount(<About />);
    expect(app.find('h1').text()).toBe('Seytech');
  });
});
