import {Story} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {Buttons, PropsType} from "./Buttons";


export default {
    title: 'Buttons',
    component: Buttons
}

const Template: Story<PropsType> = (args) => <Buttons {...args}/>

export const Primary = Template.bind({})
const placeBetBeforeStartGameCallBack = action('Place bet')
const getCardCallBack = action('Get card')
const startGameFunctionCallBack = action('Start game')
const stopGameFunctionCallBack = action('Stop game')
const setValueCallBack = action('new value')
Primary.args = {
    bank: 10,
    resultValuePlayer:0,
    placeBetBeforeStartGame:placeBetBeforeStartGameCallBack,
    showStartButton:true,
    getCard:getCardCallBack,
    startGameFunction:startGameFunctionCallBack,
    stopGameFunction:stopGameFunctionCallBack,
    value:0,
    setValue:setValueCallBack
}
