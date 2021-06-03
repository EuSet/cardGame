import {Story} from "@storybook/react";
import React from "react";
import App from "./App";
import {DecoratorWithProvider} from "./stories/DecoratorWithProvider";


export default {
    title: 'App',
    component:App,
    decorators:[DecoratorWithProvider]
}

const Template: Story = () => <App />

export const Primary = Template.bind({})
Primary.args = {

}
