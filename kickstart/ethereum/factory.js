import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
						JSON.parse(CampaignFactory.interface),
						'0x3Bd358D12A039d4E488dBBD1D62ABa0e3Dd256D7'
					);

export default instance;