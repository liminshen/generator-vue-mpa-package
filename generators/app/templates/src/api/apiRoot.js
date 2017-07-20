import Config from '../config/url-config.js';
var env = Config.env[Config.scheme];

// 处理url地址
export const apiRoot = function() {
    return env.url_prefix;
}

export const apiRoot2 = function() {
    return env.url_prefix2;
}

export const apiRoot3 = function() {
	return env.url_prefix3;
}

// module.exports = {
//     apiRoot,
//     apiRoot2,
//     apiRoot3
// }
