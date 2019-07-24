
var time = 10;
var trueAn = 0;
var falAn = 0;
var unAn = 0;


$('#correct').text(trueAn);
$('#wrong').text(falAn);
$('#unanswered').text(unAn);

//-----Counter
$('#start').click(function(){
	$('#start').hide();
	$('#form').fadeIn();
	$('#counter').fadeIn();
	$('input').fadeIn();
	$('#counter').text(time);

});
//------count function	
	function count(){
		time--;
		$('#counter').text(time);

		if(time==-1){
			clearInterval(timeOut);
			$('#form').hide();
			$('#counter').hide();
			$('input').hide();
			$('#statistic').fadeIn();
			$('#try').fadeIn();

			submitForms;

}     
}

var timeOut = setInterval(count, 1*1000);

submitForms = function(event){
  // event.preventDefault();

   $('#form').hide();
				$('#counter').hide();
				$('input').hide();
				$('#statistic').fadeIn();
				$('#try').fadeIn();

   // $('#form1').submit();
   // $('#form2').submit();
   // $('#form3').submit();
   // $('#form4').submit(); 

   
}



 $('input').click(function(){

    	var chooseVal = '';

			chooseVal = $(this).val();
			console.log(chooseVal);
			console.log(this);

		
			if(chooseVal == "1"){
				trueAn++;
				$('#correct').text(trueAn);

			}
			
			if(chooseVal == "2"){
				falAn++;
				$('#wrong').text(falAn);

			}if(chooseVal == ""){
				unAn++;
				$('#unanswered').text(unAn);
			}

		});

 	// debugger;
			
		



//----start again
$('#try').click(function(){
	$('#try').hide();
	$('#statistic').hide();
	$('#form').fadeIn();
	$('#counter').fadeIn();

	time = 5;
	trueAn = 0;
    falAn = 0;
    unAn = 0;

     $('input[type=radio]').each(function() 
{ 
        this.checked = false; 
}); 

    $('#correct').text(trueAn);
	$('#wrong').text(falAn);
	$('#unanswered').text(unAn);

   

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
		$('#wrong').text(falAn);

		}
	}
	var timeOut = setInterval(count, 1*1000);



});