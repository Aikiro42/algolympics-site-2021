/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `static`,
				path: `${__dirname}/static/`,
			},
		},
	],
}
