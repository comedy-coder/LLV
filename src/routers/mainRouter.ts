import { routerFight } from './../view/QuicklyAnswer/Fight/interface';
import { routerFindingEnemy } from './../view/QuicklyAnswer/FindingEnemy/interface';
import { routerKL } from './../view/Klhome/router';
import { routerLXV } from './../view/LxvHome/router';
import { routerLLV } from './../view/LlvHome/router';
import { routerChoice } from './../view/ChoicePage/router';
import { routerGuide } from './../view/Guide/router';


import { routerViewProfile } from '@view/Auth/Profile/router';
import { routerHomepage } from '@view/Homepage/router';
import  { routerCharecter } from '@view/Character/router';
import { IRouter } from './interface';
import { routerLLVShake } from '@view/LlvShake/router';
import { routerLLVLLCt } from '@view/Llct/router';
import { routerLIXI } from '@view/Lixi/router';
import { routerQuicklyAnswer } from '@view/QuicklyAnswer/interface';
import { routerReadyfight } from '@view/QuicklyAnswer/ReadyFight/interface';
import { routerWinpage } from '@view/QuicklyAnswer/WinPage/interface';


export const privatePage: IRouter[] = [routerViewProfile];

export const publicPage: IRouter[] = [routerWinpage,routerFight,routerHomepage, routerViewProfile, routerCharecter, routerGuide, routerChoice, routerLLV, routerLXV,routerLLVShake,routerLLVLLCt,routerKL,routerLIXI,routerQuicklyAnswer,routerFindingEnemy,routerReadyfight];
