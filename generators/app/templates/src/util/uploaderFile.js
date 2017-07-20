/**
 * Created by sam on 2017/2/19.
 */
/**
 * Created by samli on 2017/1/21.
 */
define(function (require, exports, module) {
	function uploaderFile(el,cb) {
		this.el = el;
		this.cb = cb;
		this.init();
	}
	uploaderFile.prototype.init = function () {
		var self = this;
		this.createFrom();
		this.setAjaxForm();
		this.bindEvent();
		this._input_file.click();
	}
	uploaderFile.prototype.createFrom = function () {
		var _from , _input_file;
		
		_from = document.createElement('form');
		_from.action = '../api/base/uploadDoc';
		_from.method = 'post';
		_from.enctype = 'multipart/form-data';
		
		_input_file = document.createElement('input');
		_input_file.type = "file";
		_input_file.name = "file";
		_input_file.className = "s_file";
		
		_form.appendChild(this._input_file);
		
		this._form = _from;
		this.el.appendChild(this._form);
	}
	uploaderFile.prototype.setAjaxForm = function (okFn) {
		var self = this;
		this._form.submit(function(e) {
			e.preventDefault();
			$.ajax({
				type : 'POST',
				url : self._form.attr('action'),
				data : new FormData(self._form[0]),
				processData: false,
				contentType: false,
				success : function(data) {
					self.cb&&self.cb(data);
				}
			});
		});
	}
	uploaderFile.prototype.bindEvent = function () {
		var self = this;
		this._input_file.onchange = function () {
			self._form.onsubmit();
		}
	}
	return uploaderFile;
});
