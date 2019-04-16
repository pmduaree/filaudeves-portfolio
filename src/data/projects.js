import freshdeskTrelloImg from "../images/freshdesk-trello.png";
import scrumPokerImg from "../images/scrum-poker.png";
import standBotImg from "../images/stand-bot.png";
import retrospectivesImg from "../images/retrospectives.png";

export const PROJECTS = [
  {
    id: 'freshdesk-trello',
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
    type: 'DEVICES'
  }
];

export const PROJECT_TYPES = {
  ALL_PROJECTS: {name: "ALL_PROJECTS", display: "Show All"},
  DESKTOP: {name: "DESKTOP", display: "Desktop"},
  DEVICES: {name: "DEVICES", display: "Devices"}
};