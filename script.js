//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// Plugin Script
// v1.0: Sid Shardanand - 20240722
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
preText = "http://webcache.googleusercontent.com/search?q=cache:";
inText = prompt("Enter a URL to get the Cached page!\nHelp: sidshardanand.com");
if(inText == ""){
	window.location.replace(preText + window.location.href);
} else if(inText != null) {
	window.location.replace(preText + inText);
}