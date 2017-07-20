/**
 * Created by samli on 2017/2/2.
 */
export default {
	format_time : function (target_timeStamp) {
		var d , h , m , s , now_timeStamp , second;
		var result = '';
		now_timeStamp = new Date().getTime();
		second = (target_timeStamp-now_timeStamp)/1000;
		d = parseInt(second/3600/24);
		second %= (3600*24);
		h = parseInt(second/3600);
		second %= 3600;
		m = parseInt(second/60);
		s = parseInt(second%60);
		if(d>0){
			result += d+'天';
		}
		result += h+'小时';
		result += m+'分';
		result += s+'秒';
		return result;
	},
	stringArr2Json : function(stringArr) {
		var arr = stringArr.split('yh2016*');
		var result = [];
		for(var i = 0 ; i <arr.length; i++){
			result.push(JSON.parse(arr[i]));
		}
		return result;
	},
	Uatest : function () {
		var UA = window.navigator.userAgent,
			isAndorid = /android/i.test(UA),
			isIphone = /iphone/i.test(UA),
			//isIphone = /(?:iPhone)/.test(UA),
			isPad = /ipad/i.test(UA),
			isDolphin = typeof dolphin !== 'undefined',
			device = '';
		device = isAndorid ? 'android' : isIphone ? 'ios' : isPad ? 'ipad':'unknow';
		return device;
	},
	isWeixin : function () {
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			return true;
		} else {
			return false;
		}
	}
}
