// http://la.ma.la/misc/userjs/ldr_with_livedoor_clip_count_images.user.js
(function(){
	var description = "livedoorクリップに登録されている件数です";
	entry_widgets.add('ldc_counter', function(feed, item){
		var link = item.link.replace(/#/g,'%23');
		return [
			'<a href="http://clip.livedoor.com/page/', link, '">',
			'<img src="http://parts.blog.livedoor.jp/img/cmn/clip_16_12_w.gif" border=0><img style="border:none;margin-left:3px" ',
			'src="http://image.clip.livedoor.com/counter/', link, '"></a>'
		].join('');
	}, description);
})();
