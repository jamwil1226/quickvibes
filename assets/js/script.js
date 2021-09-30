var bingApiKey = "ApWWdyfvVCEs0Eo30iVwTthxgp6m14ddlzBTprYqxsNrlIEtIXHAuHWYwZRBEXLz";

// var joobleApiKey = "7845673c-096c-42b4-af8a-9687a66ea657";

var url = "https://jooble.org/api/";
var joobleApiKey = "7845673c-096c-42b4-af8a-9687a66ea657";
var params = "{ keywords: 'it', location: 'Bern'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
//Send request to the server
http.send(params);