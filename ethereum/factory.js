import web3 from './web3';
import Campaignfactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Campaignfactory.interface),
  '0xac481378378E099AD07F2597e486392eA18dd9A6',
);

export default instance;
