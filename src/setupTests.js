import enzyme, { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import 'jest-styled-components'

configure({ adapter: new Adapter() })

enzyme.mountStyled = StyledComponent => {
  const renderedComponent = mount(StyledComponent)
  return renderedComponent.find(`.${StyledComponent.type.styledComponentId}`);
}

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
