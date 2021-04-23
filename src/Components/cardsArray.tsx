import React from "react";
import aceC from "./cardsimages/AC.png";
import {v1} from "uuid";
import twoC from "./cardsimages/2C.png";
import threeC from "./cardsimages/3C.png";
import fourC from "./cardsimages/4C.png";
import fiveC from "./cardsimages/5C.png";
import sixC from "./cardsimages/6C.png";
import sevenC from "./cardsimages/7C.png";
import eightC from "./cardsimages/8C.png";
import nineC from "./cardsimages/9C.png";
import tenC from "./cardsimages/10C.png";
import jackC from "./cardsimages/JC.png";
import queenC from "./cardsimages/QC.png";
import kingC from "./cardsimages/KC.png";
import {CardType} from "../redux/play-reducer";

export const cardsArray:Array<CardType> = [
    {value:  11 || 1 || 10, image: <img src={aceC} alt={'#'}/>, id: v1()}, {
        value: 2,
        image: <img src={twoC} alt={'#'}/>,
        id: v1()
    },
        {value: 3, image: <img src={threeC} alt={'#'}/>, id: v1()}, {
        value: 4,
        image: <img src={fourC} alt={'#'}/>,
        id: v1()
    },
        {value: 5, image: <img src={fiveC} alt={'#'}/>, id: v1()}, {
        value: 6,
        image: <img src={sixC} alt={'#'}/>,
        id: v1()
    },
        {value: 7, image: <img src={sevenC} alt={'#'}/>, id: v1()}, {
        value: 8,
        image: <img src={eightC} alt={'#'}/>,
        id: v1()
    },
        {value: 9, image: <img src={nineC} alt={'#'}/>, id: v1()}, {
        value: 10,
        image: <img src={tenC} alt={'#'}/>,
        id: v1()
    },
        {value: 2, image: <img src={jackC} alt={'#'}/>, id: v1()}, {
        value: 3,
        image: <img src={queenC} alt={'#'}/>,
        id: v1()
    },
        {value: 4, image: <img src={kingC} alt={'#'}/>, id: v1()}

]