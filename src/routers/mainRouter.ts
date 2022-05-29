import { routerLXV } from './../view/LxvHome/router';
import { routerLLV } from './../view/LlvHome/router';
import { routerChoice } from './../view/ChoicePage/router';
import { routerGuide } from './../view/Guide/router';


import { routerViewProfile } from '@view/Auth/Profile/router';
import { routerHomepage } from '@view/Homepage/router';
import  { routerCharecter } from '@view/Character/router';
import { IRouter } from './interface';
import { routerLLVShake } from '@view/LlvShake/router';


export const privatePage: IRouter[] = [routerViewProfile];

export const publicPage: IRouter[] = [routerHomepage, routerViewProfile, routerCharecter, routerGuide, routerChoice, routerLLV, routerLXV,routerLLVShake];
