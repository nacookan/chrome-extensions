// http://la.ma.la/misc/userjs/ldr_with_hatena_bookmark_count_images.user.js
(function(){
	var description = "はてなブックマークにブックマークされている件数です";
	entry_widgets.add('hb_counter', function(feed, item){
		var link = item.link.replace(/#/g,'%23');
		return [
			'<a href="http://b.hatena.ne.jp/entry/', link, '">',
			'<img src="http://d.hatena.ne.jp/images/b_entry.gif" border=0><img style="border:none;margin-left:3px;" ',
			'src="http://b.hatena.ne.jp/entry/image/',link, '"></a>'
		].join('');
	}, description);
})();
