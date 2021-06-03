import {Story} from "@storybook/react";
import React from "react";
import {PropsType, Stakes} from "./Stakes";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Stakes',
    component: Stakes
}

const Template: Story<PropsType> = (args) => <Stakes {...args}/>

export const Primary = Template.bind({})
const placeBetBeforeStartGameCallBack = action('Place bet')
const getCardCallBack = action('Get card')
const startGameFunctionCallBack = action('Start game')
const stopGameFunctionCallBack = action('Stop game')
Primary.args = {
    bank: 10,
    resultValuePlayer:0,
    placeBetBeforeStartGame:placeBetBeforeStartGameCallBack,
    stakePlayer:1000,
    showStartButton:true,
    getCard:getCardCallBack,
    startGameFunction:startGameFunctionCallBack,
    stopGameFunction:stopGameFunctionCallBack

}
