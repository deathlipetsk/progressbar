let progress=0;

$('.j_btn_1').click(function() {
	if (progress<100) {
	progress = progress+1}
	else progress=100;
	$('.progress-bar').attr('style', `width:${progress}%`);
	$('.progress-bar').text(progress+'%');
});

$('.j_btn_3').click(function() {
	if (progress<=97) {
	progress = progress+3}
	else progress=100;
	$('.progress-bar').attr('style', `width:${progress}%`);
	$('.progress-bar').text(progress+'%');
});

$('.j_btn_7').click(function() {
	if (progress<=93) {
	progress = progress+7}
	else progress=100;
	$('.progress-bar').attr('style', `width:${progress}%`);
	$('.progress-bar').text(progress+'%');
})

