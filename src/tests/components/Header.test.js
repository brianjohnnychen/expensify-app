import React from 'react'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { Header } from '../../components/Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
    // expect(toJSON(wrapper)).toMatchSnapshot()
    // expect(wrapper.find('h1').length).toBe(1)
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot() // will always pass on first run b/c there is not existing snapshot
})

test('should call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})

// react-test-renderer
// shallow rendering vs full dom rendering
// shallow - only renders given components
// full dom renders child components as well