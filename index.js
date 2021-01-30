
window.onload = function(){
	document.getElementById("submit").onclick = function() {
		var latitude = document.getElementById("myText").value;
		var longitude = document.getElementById("myPwd").value;
		var distance = document.getElementById("myKm").value;
		var data = {"latitude":latitude,"longitude":longitude,"distance":distance};
		const sendPost = async () => {
			const url = 'https://localhost:3000/test';
			const body = JSON.stringify(data);
			const headers = {'Content-Type': 'application/json'}; 
			const method = 'POST';
			const response = await fetch(url, { method, body, headers })
			const data2 = await response.text();
		}

		sendPost();
		
	}
};