import { Button } from '../index'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => <Button {...args}>Button</Button>
export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}