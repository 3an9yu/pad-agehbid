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

	function old_group(pad_id) {
		var num = parseInt(pad_id[2]);
		if (num == 0 || num == 5) {
			return "A";
		} else if (num == 1 || num == 6) {
			return "B";
		} else if (num == 2 || num == 7) {
			return "C";
		} else if (num == 3 || num == 8) {
			return "D";
		} else if (num == 4 || num == 9) {
			return "E";
		} else {
			return "_";
		}
	}

	function new_group(pad_id) {
		return (parseInt(pad_id) % 3).toString();
	}

	var prevId = null;
	var prevNum = null;

	$("#pad_id").on('change input', function() {
		var val = this.value.replace(/\D/g, "").trim();
		if (val !== prevId) {
			var pad_num = id_to_num(val);
			$("#pad_number").val(pad_num);
			prevId = val;
			$("#pad_group").text("Group " + old_group(val) + " / " + new_group(val));
		}
	});

	$("#pad_number").on('change input', function() {
		var val = this.value.replace(/\D/g, "").trim();
		if (val !== prevNum) {
			var pad_id = num_to_id(val);
			$("#pad_id").val(pad_id);
			prevNum = val;
			$("#pad_group").text("Group " + old_group(pad_id) + " / " + new_group(pad_id));
		}
	});

	$("#plus").click(function() {
		var prevNum_str = $("#pad_number").val();
		var newNum = parseInt(prevNum_str) + 1;
		$("#pad_number").val(newNum.toString());
		$("#pad_number").trigger('change');
	});

	$("#minus").click(function() {
		var prevNum_str = $("#pad_number").val();
		var newNum = parseInt(prevNum_str) - 1;
		if (newNum > 0) {
			$("#pad_number").val(newNum.toString());
			$("#pad_number").trigger('change');
		}
	});
});
