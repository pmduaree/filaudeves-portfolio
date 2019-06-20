import freshdeskTrelloImg from "../images/freshdesk-trello.png";
import scrumPokerImg from "../images/scrum-poker.png";
import standBotImg from "../images/stand-bot.png";
import retrospectivesImg from "../images/retrospectives.png";
import microsoftDynamicsImg from "../images/microsoft-dynamics.png";
import medicalAppImg from "../images/medical-app.png";

export const PROJECTS = [
  {
    id: 'freshdesk-and-trello',
    name: 'Freshdesk + Trello APP',
    subtitle: 'Product Design',
    imageUrl: freshdeskTrelloImg,
    type: 'DESKTOP'
  },{
    id: 'scrum-poker',
    name: 'Scrum Poker',
    imageUrl: scrumPokerImg,
    subtitle: 'Product Design',
    type: 'DESKTOP'
  },{
    id: 'stand-bot',
    name: 'Stand Bot',
    imageUrl: standBotImg,
    subtitle: 'Product Design',
    type: 'DESKTOP'
  },{
    id: 'retrospectives',
    name: 'Retrospectives',
    imageUrl: retrospectivesImg,
    subtitle: 'Product Design',
    type: 'DESKTOP'
  },{
    id: 'microsoft-dynamics',
    name: 'Freshdesk + Dynamics 365',
    imageUrl: microsoftDynamicsImg,
    subtitle: 'Product Design',
    type: 'DESKTOP'
  },{
    id: 'medical-app',
    name: 'Medical App',
    imageUrl: medicalAppImg,
    subtitle: 'UI DESIGN',
    type: 'DEVICES'
  }
];

export const PROJECT_TYPES = {
  ALL_PROJECTS: {name: "ALL_PROJECTS", display: "Show All"},
  DESKTOP: {name: "DESKTOP", display: "Desktop"},
  DEVICES: {name: "DEVICES", display: "Devices"}
};