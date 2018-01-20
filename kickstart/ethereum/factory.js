import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
						JSON.parse(CampaignFactory.interface), 
						'0xA1B4d933114C51F8a71A6Bb68E84f083e2570073'
					);

export default instance;