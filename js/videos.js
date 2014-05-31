$(document).on('ready', mostrarVideos);

function mostrarVideos()
{
	var feed = data.feed;
	var entries = feed.entry || [];
	var html = ['<ul>'];
	for (var i = 0; i < entries.length; i++) {
	    var entry = entries[i];
	    var title = entry.title.$t;
	    html.push('<li>', title, '</li>');
	}
	html.push('</ul>');
	document.getElementById('videos').innerHTML = html.join('');
}