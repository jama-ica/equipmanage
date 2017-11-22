'use strict'

class CommandSender{

	constructor(){
		;
	}

	sendCommand( command, callback ){

		let pathToTarget = "http://localhost/php/";

		var xmlhttp = new window.XMLHttpRequest();
		xmlhttp.open("POST", pathToTarget + "controller.php", true/*async*/);
		xmlhttp.addEventListener('loadend', function(){
			if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
				var res = xmlhttp.response;
				if( res !== null && res !== undefined && res !== ""){
					//console.log(res);
					let resjson = JSON.parse(res);
					callback( command, resjson );
				}
			}else{
				console.error("error : " + xmlhttp.status);
			};
		});

		xmlhttp.setRequestHeader('Pragma', 'no-cache');   
		xmlhttp.setRequestHeader('Cache-Control', 'no-cache');                    
		xmlhttp.setRequestHeader('If-Modified-Since', 'Sat, 01 Jan 2000 00:00:00 GMT'); 
		xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
		// create text for post
		var postText = "";
		let parameters = command.parameters;
		for(var key in parameters){
			if(key == null || parameters[key] == null){
				continue;
			}
			postText += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(parameters[key]);
		}
		// send post
		xmlhttp.send( postText );

	}

}
	