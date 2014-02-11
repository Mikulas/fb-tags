$('.userContent:not(.processed)').each(function(i, post) {
	var html = $(post).html();
	var edited = html;
	
	// treat first () as tag :/
	edited = edited.replace(/\(([A-Z ]+)\)/, '[$1]');

	// space after last tag
	edited = edited.replace(/\]([^\[])/, '] $1');

	// no space between tags
	edited = edited.replace(/\]\s+\[/, '][');

	// wrap in node
	edited = edited.replace(/\[[^\]]+?\]/g, '<span class="fb-tag-node">$&</span>');

	$(post).html(edited);
	$(post).addClass('processed');
});
