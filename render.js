let path = require('path');

global.path = path;
console.log(path);

var holder = document.getElementById('holder');

holder.ondragover = function () {
	return false;
};

holder.ondragleave = holder.ondragend = function () {
	return false;
};

holder.ondrop = function (e) {
	e.preventDefault();
	var file = e.dataTransfer.files[0];

	if (/image/.test(file.type)) {
		document.images[0].src = file.path;
	} else {
		alert('not a image');
	}
	// holder.innerHTML = file.path;
	console.log('File you dragged here is', file.path);
	return false;
};	

