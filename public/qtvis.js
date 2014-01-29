// function to create a random list of rectangles
// function to convert list of rectangles to JSON

var rect2D = {
    x:  0.0,
    y:  0.0,
    w:  0.0,
    h:  0.0
};

var nRectss = function(n) {
    r = new rect2D;
}    

window.onload = function() {
	var messages = [];
	var socket = io.connect('http://localhost:3700');
	var field = document.getElementById("field");
	var sendButton = document.getElementById("send");
	var qtstartButton = document.getElementById("qtstart");
	var randrectsButton = document.getElementById("randrects");
	var content = document.getElementById("content");
	var name = document.getElementById("name");

	socket.on('message', function (data) {
		if(data.message) {
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
			content.innerHTML = html;
		} else {
			console.log("Houston, we have a problem! ", data);
		}
	});

	sendButton.onclick = sendMessage = function() {
		if(name.value == "") {
			alert("Please type your name!");
		} else {
			var text = field.value;
			socket.emit('send', { message: text, username: name.value });
			field.value = "";
		}
	};

	qtstartButton.onclick = function() {
		socket.emit('send', { message: "started", username: "QTVis" });
	};

	randrectsButton.onclick = function() {
		socket.emit('send', { message: "random", username: "Rects" });
	};
}

$(document).ready(function() {
	$("#field").keyup(function(e) {
		if(e.keyCode == 13) {
			sendMessage();
		}
	});
});
