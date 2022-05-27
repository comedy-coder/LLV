import { routerChoice } from './../view/ChoicePage/router';
import { routerGuide } from './../view/Guide/router';


import { routerViewProfile } from '@view/Auth/Profile/router';
import { routerHomepage } from '@view/Homepage/router';
import {routerCharecter} from "@view/Character/router";
import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerViewProfile];

export const publicPage: IRouter[] = [routerHomepage,routerViewProfile,routerCharecter,routerGuide,routerChoice];
