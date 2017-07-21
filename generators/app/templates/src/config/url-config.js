var config = {
	"scheme": "release",
	"env": {
		"alpha": {
			"url_prefix": "https://api.leappmusic.cc"
		},
		"beta": {
			"url_prefix": "https://api-dev.demo.cc",
		},
		"release": {
			"url_prefix": "https://api.demo.cc",
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
