var config = {
	"scheme": "release",
	"env": {
		"alpha": {
			"url_prefix": "https://api.leappmusic.cc"
		},
		"beta": {
			"url_prefix": "https://demo-dev.leappmusic.cc",
		},
		"release": {
			"url_prefix": "https://demo.leappmusic.cc",
		}
	},
	"prefix": "",
	"domains": {
		"urlStatic": "www.baidu.com",
	}
};
if (process.env.NODE_ENV !== 'production') {
	config.scheme = 'beta';
}
module.exports = config;
