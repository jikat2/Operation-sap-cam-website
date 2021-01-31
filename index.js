
window.onload = function(){
	document.getElementById("submit").onclick = function() {
		var latitude = document.getElementById("myText").value;
		var longitude = document.getElementById("myPwd").value;
		var distance = document.getElementById("myKm").value;
		var data = {"latitude":latitude,"longitude":longitude,"distance":distance};
		const sendPost = async () => {
			const url = 'http://localhost:5000/test';
			const body = JSON.stringify(data);
			const headers = {'Content-Type': 'application/json'}; 
			const method = 'POST';
			const response = await fetch(url, { method, body, headers })
			const data2 = await response.text();
			return data2
		}

		currentDiv = document.getElementById("div1");
		otherDiv = document.getElementById("div2");
		sendPost().then(data => {currentDiv.innerHTML = "<img src='plot2.png'>"; otherDiv.innerHTML = data; });
		
	}
};
