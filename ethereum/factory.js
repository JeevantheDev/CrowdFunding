import web3 from './web3';
import Campaignfactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Campaignfactory.interface),
  '0xe8a31A283D06fE75F407d1282dbc5ED4c11bc12F',
);

export default instance;
