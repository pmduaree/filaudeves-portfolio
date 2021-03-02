import freshdeskTrelloImg from "../images/freshdesk-trello.png";
import medicalAppImg from "../images/medical-app.png";
import standBotImg from "../images/stand-bot.png";
import vehicleHealthImg from "../images/vehicle-health.png";
import scrumPokerImg from "../images/scrum-poker.png";
import retrospectivesImg from "../images/retrospectives.png";
import microsoftDynamicsImg from "../images/microsoft-dynamics.png";
import chilltober2019Img from "../images/chilltober2019.png";
import peachtober2020Img from "../images/peachtober2020.png";

export const PROJECTS = [
  {
    id: 'chilltober2019',
    name: 'Chilltober 2019',
    imageUrl: chilltober2019Img,
    subtitle: 'Miscellaneous',
    type: 'MISC'
  },{
    id: 'peachtober2020',
    name: 'Peachtober 2020',
    imageUrl: peachtober2020Img,
    subtitle: 'Miscellaneous',
    type: 'MISC'
  },{
    id: 'freshdesk-and-trello',
    name: 'Freshdesk + Trello APP',
    subtitle: 'Product Design',
    imageUrl: freshdeskTrelloImg,
    type: 'DESKTOP'
  },{
    id: 'medical-app',
    name: 'Medical App',
    imageUrl: medicalAppImg,
    subtitle: 'UI DESIGN',
    type: 'DEVICES'
  },{
    id: 'stand-bot',
    name: 'Stand Bot',
    imageUrl: standBotImg,
    subtitle: 'Product Design',
    type: 'DESKTOP'
  },{
    id: 'vehicle-health',
    name: 'Vehicle Health Monitor',
    imageUrl: vehicleHealthImg,
    subtitle: 'UX/UI Design',
    type: 'DEVICES'
  },{
    id: 'scrum-poker',
    name: 'Scrum Poker',
    imageUrl: scrumPokerImg,
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
  }
];

export const PROJECT_TYPES = {
  ALL_PROJECTS: {name: "ALL_PROJECTS", display: "Show All"},
  DESKTOP: {name: "DESKTOP", display: "Desktop"},
  DEVICES: {name: "DEVICES", display: "Devices"},
  MISC: {name: "MISC", display: "Misc"}
};