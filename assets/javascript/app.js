
var time = 3;

$('#start').click(function(){
	$('#start').hide();
	$('#form').fadeIn();
	$('#counter').fadeIn();


$('#counter').text(time);
function count(){
	time--;
	$('#counter').text(time);

	if(time==-1){
		clearInterval(timeOut);
		$('#form').hide();
		$('#counter').hide();
		$('#statistic').fadeIn();
		$('#try').fadeIn();

	}
}
var timeOut = setInterval(count, 1*1000);

});

$('#try').click(function(){
	$('#try').hide();
	$('#statistic').hide();
	$('#form').fadeIn();
	$('#counter').fadeIn();

time = 3;
$('#counter').text(time);
function count(){
	time--;
	$('#counter').text(time);

	if(time==-1){
		clearInterval(timeOut);
		$('#form').hide();
		$('#counter').hide();
		$('#statistic').fadeIn();
		$('#try').fadeIn();

	}
}
var timeOut = setInterval(count, 1*1000);

});





