import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
	// separate props object from the component props, coming from route defined in routes.js
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		console.log(summary);
		return {};
	}

	render() {
		return (
			<Layout>
				<h3>CampaignShow</h3>
			</Layout>
		);
	}
}

export default CampaignShow;