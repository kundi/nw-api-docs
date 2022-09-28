export default {
	title: 'Nightwatch API',
	description: 'memes',
	head: [
		['link', { rel: "shortcut icon", href: "favicon.ico"}],
	],
	themeConfig: {
		logo: '/nightwatch-logo.svg',
		sidebar: [
			{
				items: [
					{ text: 'Introduction', link: '/' },
					{ text: 'Authentication', link: '/authentication/' },
					{ text: 'Sign up for Nightwatch', link: 'https://app.nightwatch.io/signup' },
					{ text: 'Nightwatch Help Docs', link: 'https://docs.nightwatch.io/en/' },
				]
			},
			{
				text: "Endpoints",
				items: [
					{ text: 'User', link: '/user/' },
					{ text: 'Sub Users', link: '/subusers/' },
					{ text: 'URL Groups', link: '/groups/' },
					{ text: 'URLs ', link: '/urls/' },
					{ text: 'Keywords ', link: '/keywords/' },
					{ text: 'Keyword Views ', link: '/keyword-views/' },
					{ text: 'Keyword Results ', link: '/keyword-results/' },
					{ text: 'Competitors ', link: '/competitors/' },
					{ text: 'Data Series ', link: '/data-series/' },
					{ text: 'Data Stats ', link: '/data-stats/' },
					{ text: 'SERPs ', link: '/serps/' },
				]
			}
		]
	}
}
