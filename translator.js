$(document).ready(function() {
	function id_to_num(pad_id) {
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
	}

	function num_to_id(pad_number) {
		var num = parseInt(pad_number);
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
	}

	$("#pad_id").change(function() {
		var pad_num = id_to_num($("#pad_id").val().replace(',','')
		$("#pad_number").val(pad_num);
	});

	$("#pad_number").change(function() {
		var pad_id = num_to_id($("#pad_number").val().replace(',',''))
		$("#pad_id").val(pad_id);
	});
});
