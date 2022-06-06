import { routerFightScrew } from './../view/TetEvent/Screw/FightScrew/interface';
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
import {  routerWinpage } from '@view/QuicklyAnswer/WinPage/interface';
import { routerLosepage } from '@view/QuicklyAnswer/LosePage/interface';
import { routerTetEvent } from '@view/TetEvent/router';
import { routerScrewhome } from '@view/TetEvent/Screw/ScrewHome/interface';
import { routerFindingenemyscrew } from '@view/TetEvent/Screw/FindingEnemyScrew/interface';
import { routerReadyfightscrew } from '@view/TetEvent/Screw/ReadyFightScew/interface';
import { routerWinscrew } from '@view/TetEvent/Screw/WinScrew/interface';
import { routerprotectorhome } from '@view/TetEvent/ProtectorHero/ProtectorHome/interface';
import { routerWinprotector } from '@view/TetEvent/ProtectorHero/WinProtector/interface';
import { routerFightprotector } from '@view/TetEvent/ProtectorHero/FightProtector/interface';
import { routerReadyfightprotector } from '@view/TetEvent/ProtectorHero/ReadyFightProtector/interface';
import { routerFindingenemyprotector } from '@view/TetEvent/ProtectorHero/FindingEnemyProtector/interface';
import { routerRules } from '@view/Rules/router';
import { routerLeaderBoard } from '@view/LeaderBoard/router';


export const privatePage: IRouter[] = [routerViewProfile];

export const publicPage: IRouter[] = [routerWinpage,routerLeaderBoard,routerRules,routerTetEvent,routerprotectorhome,routerWinprotector,routerFightprotector,routerReadyfightprotector,routerFindingenemyprotector,routerLosepage,routerFight,routerHomepage, routerViewProfile, routerCharecter, routerGuide, routerChoice, routerLLV, routerLXV,routerLLVShake,routerLLVLLCt,routerKL,routerLIXI,routerQuicklyAnswer,routerFindingEnemy,routerReadyfight,routerScrewhome,routerFindingenemyscrew,routerReadyfightscrew,routerFightScrew,routerWinscrew];
