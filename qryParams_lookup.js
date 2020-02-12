(function(){
	var qryParams = {};
	window.document.location.search.substr(1).split('&').forEach(function(kv){
	  [key, value] = kv.split('=');
	  qryParams[key] = decodeURIComponent(value);
	});
	return qryParams.category;
})()
