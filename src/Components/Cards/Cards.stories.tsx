import {Cards, PropsType} from "./Cards";
import {Story} from "@storybook/react";
import {cardsArray} from "../Common/cardsArray";
import React from "react";

export default {
    title:'Cards',
    component:Cards
}

const Template:Story<PropsType> = (args) => <Cards {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    resultValuePlayer:0,
    playTable:[cardsArray[0],cardsArray[15],cardsArray[10],cardsArray[28],cardsArray[44]]
}
