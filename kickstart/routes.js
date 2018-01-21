// the require statement below returns a function and will be invoked immediately
const routes = require('next-routes')(); 

routes
	.add('/campaigns/new', '/campaigns/new')
	.add('/campaigns/:address', '/campaigns/show');

module.exports = routes;