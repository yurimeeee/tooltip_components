import { DefaultTheme } from "styled-components";

const colors = {
    // General
    whiteColor: '#FFFFFF',
    blackColor: '#000000',
    grayColor: '#999999',
    lightgrayColor: '#ebebeb',

    // Point
    activeColor: '#31B396',
    disabledColor: '#575757',



};


export type ColorsTypes = typeof colors;

const theme: DefaultTheme = {
    colors
};

export default theme;
