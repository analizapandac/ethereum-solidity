import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';

class CampaignShow extends Component {
	// separate props object from the component props, coming from route defined in routes.js
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();

		return {
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	}

	renderCards() {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: balance,
				meta: 'Campaign Balance',
				description: 'The remaining balance from all contributions',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution',
				description: 'The minimum amount of wei to contribute in order to be approved as a campaign contributor',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: requestsCount,
				meta: 'Spending Requests',
				description: 'The number of spending requests created by the manager',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: approversCount,
				meta: 'Contributors',
				description: 'The number of people who have contributed to this campaign',
				style: { overflowWrap: 'break-word' }
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<h3>Campaign Details</h3>
				{this.renderCards()}
			</Layout>
		);
	}
}

export default CampaignShow;