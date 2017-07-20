/**
 * Created by samli on 2017/2/16.
 */
import api from '../api/index';
var IMserver = function () {
	this.conn = null;
	this.messageList = [];
	this.myHeadimgurl = '';
	this.nickname = '';
	this.groups_groupid = '';
}
IMserver.prototype.loginIM = function (name,pwd,nn,imgUrl,gid) {
	var that = this;
	this.nickname = nn;
	this.myHeadimgurl = imgUrl;
	this.groups_groupid = gid;
	this.conn.listen({
		onOpened: function(message) { //连接成功回调
			// 如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
			// 手动上线指的是调用conn.setPresence(); 如果conn初始化时已将isAutoLogin设置为true
			// 则无需调用conn.setPresence();
			console.log(message);
		},
		onClosed: function(message) {
			console.log(message);
		}, //连接关闭回调
		onTextMessage: function(message) {
			if(message.type == 'groupchat') {
				if(message.to!=that.groups_groupid)return;
				var uid = message.from;
				if(message.ext.headimgurl){
					var msgJson = {
						data:message.data,
						user:message.ext.nickname,
						avator:message.ext.headimgurl,
						isSend : false
					};
					that.messageList.push(msgJson);
					localStorage['chatList'+gid] += 'yh2016*' + JSON.stringify(msgJson);
				}else{
					api.getUserInfo({
						userId : uid
					}).then(function (response) {
						var data = response.data.data;
						var msgJson = {
							data:message.data,
							user:message.ext.nickname,
							avator:data.headimgurl,
							isSend : false
						};
						that.messageList.push(msgJson);
						localStorage['chatList'+gid] += 'yh2016*' + JSON.stringify(msgJson);
					});
				}
			}
		}, //收到文本消息
		onEmojiMessage: function(message) {
			
			console.log(message);
		}, //收到表情消息
		onPictureMessage: function(message) {
			console.log(message);
		}, //收到图片消息
		onCmdMessage: function(message) {
			console.log(message);
		}, //收到命令消息
		onAudioMessage: function(message) {
			console.log(message);
		}, //收到音频消息
		onLocationMessage: function(message) {
			console.log(message);
		}, //收到位置消息
		onFileMessage: function(message) {
			console.log(message);
		}, //收到文件消息
		onVideoMessage: function(message) {
			var node = document.getElementById('privateVideo');
			var option = {
				url: message.url,
				headers: {
					'Accept': 'audio/mp4'
				},
				onFileDownloadComplete: function(response) {
					var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
					node.src = objectURL;
				},
				onFileDownloadError: function() {
					console.log('File down load error.')
				}
			};
			WebIM.utils.download.call(conn, option);
		}, //收到视频消息
		onPresence: function(message) {
			console.log(message);
		}, //收到联系人订阅请求、处理群组、聊天室被踢解散等消息
		onRoster: function(message) {
			console.log(message);
		}, //处理好友申请
		onInviteMessage: function(message) {
			console.log(message);
		}, //处理群组邀请
		onOnline: function() {
			console.log(message);
		}, //本机网络连接成功
		onOffline: function() {
			console.log(message);
		}, //本机网络掉线
		onError: function(message) {
			console.log(message);
		}, //失败回调
		onBlacklistUpdate: function(list) { //黑名单变动
			// 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
			console.log(list);
		}
	});
	var options = {
		apiUrl: WebIM.config.apiURL,
		user: name,
		pwd: pwd,
		appKey: WebIM.config.appkey
	};
	this.conn.open(options);
}
IMserver.prototype.connect = function (https,url,isAutoLoginBoo,isMultiLoginSessions) {
	this.conn = new WebIM.connection({
		https: https,
		url: url,
		isAutoLogin: isAutoLoginBoo,
		isMultiLoginSessions: isMultiLoginSessions
	});
}
IMserver.prototype.sendMessage = function (txt,okFn,errorFn) {
	var id = this.conn.getUniqueId();
	var msg = new WebIM.message('txt', id);
	var _imS = this;
	var gid = this.groups_groupid;
	var option = {
		msg: txt,
		to: gid,
		roomType: false,
		ext :{
			'nickname':this.nickname,
			'headimgurl' : this.myHeadimgurl
		},
		chatType: 'chatRoom',
		success: function () {
			var msgJson = {
				data:txt,
				user:'我',
				avator:_imS.myHeadimgurl,
				isSend : true
			};
			localStorage['chatList'+gid] += 'yh2016*' + JSON.stringify(msgJson);
			_imS.messageList.push(msgJson);
			okFn&&okFn();
			console.log('send room text success');
		},
		fail: function () {
			errorFn&&errorFn();
			console.log('failed');
		}
	};
	msg.set(option);
	msg.setGroup('groupchat');
	this.conn.send(msg.body);
}
module.exports = IMserver;