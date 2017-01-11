$(document).ready(function() {
	function id_to_num(pad_id) {
		if (/^[0-9]{9}$/.test(pad_id)) {
			if (parseInt(pad_id) >= 0) {
				var a = pad_id.charAt(0);
				var b = pad_id.charAt(1);
				var c = pad_id.charAt(2);
				var d = pad_id.charAt(3);
				var e = pad_id.charAt(4);
				var f = pad_id.charAt(5);
				var g = pad_id.charAt(6);
				var h = pad_id.charAt(7);
				var i = pad_id.charAt(8);

				var code = parseInt(a + g + e + h + b + d + i + f + c);
				code -= 323795845;

				return code.toString();
			} else {
				return "Invalid ID";
			}
		} else {
			return "Invalid ID";
		}
	}

	function num_to_id(pad_number) {
		if (!isNaN(pad_number)) {
			var num = parseInt(pad_number);
			if (num > 0) {
				num += 323795845;
				var num_str = num.toString();

				var a = num_str.charAt(0);
				var g = num_str.charAt(1);
				var e = num_str.charAt(2);
				var h = num_str.charAt(3);
				var b = num_str.charAt(4);
				var d = num_str.charAt(5);
				var i = num_str.charAt(6);
				var f = num_str.charAt(7);
				var c = num_str.charAt(8);

				return a + b + c + d + e + f + g + h + i;
			} else {
				return "Invalid #";
			}
		} else {
			return "Invalid #";
		}
	}

	var prevId = null;
	var prevNum = null;

	$("#pad_id").on('change input', function() {
		var val = this.value;
		if (val !== prevId) {
			var pad_num = id_to_num(val.replace(/[, ]+/g, "").trim());
			$("#pad_number").val(pad_num);
			prevId = this.value;
		}
	});

	$("#pad_number").on('change input', function() {
		var val = this.value;
		if (val !== prevNum) {
			var pad_id = num_to_id(val.replace(/[, ]+/g, "").trim());
			$("#pad_id").val(pad_id);
			prevNum = this.num;
		}
	});
});
