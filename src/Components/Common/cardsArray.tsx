import React from "react";
import aceC from "../cardsimages/AC.png";
import aceD from "../cardsimages/AD.png";
import aceH from "../cardsimages/AH.png";
import aceS from "../cardsimages/AS.png";
import {v1} from "uuid";
import twoC from "../cardsimages/2C.png";
import threeC from "../cardsimages/3C.png";
import fourC from "../cardsimages/4C.png";
import fiveC from "../cardsimages/5C.png";
import sixC from "../cardsimages/6C.png";
import sevenC from "../cardsimages/7C.png";
import eightC from "../cardsimages/8C.png";
import nineC from "../cardsimages/9C.png";
import tenC from "../cardsimages/10C.png";
import jackC from "../cardsimages/JC.png";
import queenC from "../cardsimages/QC.png";
import kingC from "../cardsimages/KC.png";
import twoD from "../cardsimages/2D.png";
import threeD from "../cardsimages/3D.png";
import fourD from "../cardsimages/4D.png";
import fiveD from "../cardsimages/5D.png";
import sixD from "../cardsimages/6D.png";
import sevenD from "../cardsimages/7D.png";
import eightD from "../cardsimages/8D.png";
import nineD from "../cardsimages/9D.png";
import tenD from "../cardsimages/10D.png";
import jackD from "../cardsimages/JD.png";
import queenD from "../cardsimages/QD.png";
import kingD from "../cardsimages/KD.png";
import twoS from "../cardsimages/2S.png";
import threeS from "../cardsimages/3S.png";
import fourS from "../cardsimages/4S.png";
import fiveS from "../cardsimages/5S.png";
import sixS from "../cardsimages/6S.png";
import sevenS from "../cardsimages/7S.png";
import eightS from "../cardsimages/8S.png";
import nineS from "../cardsimages/9S.png";
import tenS from "../cardsimages/10S.png";
import jackS from "../cardsimages/JS.png";
import queenS from "../cardsimages/QS.png";
import kingS from "../cardsimages/KS.png";
import twoH from "../cardsimages/2H.png";
import threeH from "../cardsimages/3H.png";
import fourH from "../cardsimages/4H.png";
import fiveH from "../cardsimages/5H.png";
import sixH from "../cardsimages/6H.png";
import sevenH from "../cardsimages/7H.png";
import eightH from "../cardsimages/8H.png";
import nineH from "../cardsimages/9H.png";
import tenH from "../cardsimages/10H.png";
import jackH from "../cardsimages/JH.png";
import queenH from "../cardsimages/QH.png";
import kingH from "../cardsimages/KH.png";
import {CardType} from "../../redux/play-reducer";

export const cardsArray:Array<CardType> = [
    {value:  11 || 1 || 10, image: <img src={aceC} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={twoC} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={threeC} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={fourC} alt={'#'}/>, id: v1()},
    {value: 5, image: <img src={fiveC} alt={'#'}/>, id: v1()},
    {value: 6, image: <img src={sixC} alt={'#'}/>, id: v1()},
    {value: 7, image: <img src={sevenC} alt={'#'}/>, id: v1()},
    {value: 8, image: <img src={eightC} alt={'#'}/>, id: v1()},
    {value: 9, image: <img src={nineC} alt={'#'}/>, id: v1()},
    {value: 10, image: <img src={tenC} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={jackC} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={queenC} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={kingC} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={twoD} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={threeD} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={fourD} alt={'#'}/>, id: v1()},
    {value: 5, image: <img src={fiveD} alt={'#'}/>, id: v1()},
    {value: 6, image: <img src={sixD} alt={'#'}/>, id: v1()},
    {value: 7, image: <img src={sevenD} alt={'#'}/>, id: v1()},
    {value: 8, image: <img src={eightD} alt={'#'}/>, id: v1()},
    {value: 9, image: <img src={nineD} alt={'#'}/>, id: v1()},
    {value: 10, image: <img src={tenD} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={jackD} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={queenD} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={kingD} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={twoS} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={threeS} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={fourS} alt={'#'}/>, id: v1()},
    {value: 5, image: <img src={fiveS} alt={'#'}/>, id: v1()},
    {value: 6, image: <img src={sixS} alt={'#'}/>, id: v1()},
    {value: 7, image: <img src={sevenS} alt={'#'}/>, id: v1()},
    {value: 8, image: <img src={eightS} alt={'#'}/>, id: v1()},
    {value: 9, image: <img src={nineS} alt={'#'}/>, id: v1()},
    {value: 10, image: <img src={tenS} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={jackS} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={queenS} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={kingS} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={twoH} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={threeH} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={fourH} alt={'#'}/>, id: v1()},
    {value: 5, image: <img src={fiveH} alt={'#'}/>, id: v1()},
    {value: 6, image: <img src={sixH} alt={'#'}/>, id: v1()},
    {value: 7, image: <img src={sevenH} alt={'#'}/>, id: v1()},
    {value: 8, image: <img src={eightH} alt={'#'}/>, id: v1()},
    {value: 9, image: <img src={nineH} alt={'#'}/>, id: v1()},
    {value: 10, image: <img src={tenH} alt={'#'}/>, id: v1()},
    {value: 2, image: <img src={jackH} alt={'#'}/>, id: v1()},
    {value: 3, image: <img src={queenH} alt={'#'}/>, id: v1()},
    {value: 4, image: <img src={kingH} alt={'#'}/>, id: v1()},
    {value:  11 || 1 || 10, image: <img src={aceD} alt={'#'}/>, id: v1()},
    {value:  11 || 1 || 10, image: <img src={aceH} alt={'#'}/>, id: v1()},
    {value:  11 || 1 || 10, image: <img src={aceS} alt={'#'}/>, id: v1()}


]
