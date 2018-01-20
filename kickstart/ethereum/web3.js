import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// in browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	// in server or user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/rS25WLxbN4BWYdTdxVLO'
	);
	web3 = new Web3(provider);
}

export default web3;