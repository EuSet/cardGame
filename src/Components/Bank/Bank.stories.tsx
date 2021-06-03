import {Story} from "@storybook/react";
import React from "react";
import {Bank, PropsType} from "./Bank";


export default {
    title:'Bank',
    component:Bank
}

const Template:Story<PropsType> = (args) => <Bank {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    resultValuePlayer:21,
    resultComputerValue:20,
    counterValueComp:0,
    counterValuePlayer:0,
    bank:500
}
