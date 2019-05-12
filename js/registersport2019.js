var registrationFeeArray={"VolleyBall":"50$",
					  "Table Tennis Singles - Adults":"10$",
					  "Table Tennis Singles - Jrs":"5$",
					  "Tennis Singles - Men":"10$",
					  "Tennis Singles - Jrs":"5$",
					  "Badminton Doubles - Adults":"20$",
					  "Tennicoit Doubles - Womens":"20$",
					  "Chess - 8-12yrs":"5$",
					  "Chess - 13-18yrs":"5$",
					  "Throwball - Women":"50$",	 
					  "Kho Kho - Women":"50$" 
};
var defaultFee="20$";
$("#sportType").change(function() {
	if($(this).val() == null || $(this).val() == ""){
		$('#playerFullName_div').hide();
		$('#player1FullName_div').hide();
		$('#player2FullName_div').hide();
		$('#teamName_div').hide();
		$('#email_div').hide();
		$('#volleyGender_div').hide();
		$('#playerGender_div').hide();
		$('#player1Gender_div').hide();
		$('#player2Gender_div').hide();
		$('#female_Gender_div').hide();
		$('#contactPhone_div').hide();
		$('#player_Age_generic_div').hide();
		$('#player_chess_Age_8_12_div').hide();
		$('#player_chess_Age_13_18_div').hide();
		$('#registration_fee_div').hide();
		$('#register_button').attr( "disabled", "disabled");
		return;
}
	if ($(this).val() == "VolleyBall" || $(this).val() == "Kho Kho - Women") {
		$('#playerFullName_div').show();
		$('#teamName_div').show();
		$('#email_div').show();
		$('#contactPhone_div').show();
		$('#playerGender_div').hide();
		$('#female_Gender_div').hide();
		$('#player1FullName_div').hide();
		$('#player2FullName_div').hide();
		$('#player1Gender_div').hide();
		$('#player2Gender_div').hide();
		$('#player_Age_generic_div').hide();
		$('#player_chess_Age_8_12_div').hide();
		$('#player_chess_Age_13_18_div').hide();
		$('#register_button').removeAttr('disabled');
		$('#player1FullName').removeAttr('required');
		$('#player2FullName').removeAttr('required');
		$('#registration_fee_div').show();
		var value = registrationFeeArray[$(this).val()] != null ?registrationFeeArray[$(this).val()]:defaultFee;
		document.getElementById('registrationFee').value=value;
		if($(this).val() == "VolleyBall"){
			$('#volleyGender_div').show();
			$('#female_Gender_div').hide();
		}else{
			$('#volleyGender_div').hide();
			$('#female_Gender_div').show();
		}
		
		// $('#otherField').attr('required','');
		// $('#otherField').attr('data-error', 'This field is required.');
	} else if ($(this).val() == "Table Tennis Singles - Adults" || $(this).val() == "Table Tennis Singles - Jrs" 
			    || $(this).val() == "Tennis Singles - Men" || $(this).val() == "Tennis Singles - Jrs" 
					 || $(this).val() == "Chess - 8-12yrs" || $(this).val() == "Chess - 13-18yrs"
					 || $(this).val() == "Throwball - Women") {
		$('#playerFullName_div').show();
		$('#teamName_div').hide();
		$('#volleyGender_div').hide();

		$('#email_div').show();
		$('#contactPhone_div').show();
		$('#register_button').removeAttr('disabled');
		$('#teamName').removeAttr('required');
		$('#player1FullName_div').hide();
		$('#player2FullName_div').hide();
		$('#player_Age_generic_div').hide();
		$('#player1Gender_div').hide();
		$('#player2Gender_div').hide();
		$('#player_chess_Age_8_12_div').hide();
		$('#player_chess_Age_13_18_div').hide();
		$('#playerGender_div').hide();
		$('#female_Gender_div').hide();
		$('#player1FullName').removeAttr('required');
		$('#player2FullName').removeAttr('required');
		$('#registration_fee_div').show();
		var value = registrationFeeArray[$(this).val()] != null ?registrationFeeArray[$(this).val()]:defaultFee;
		document.getElementById('registrationFee').value=value;
		if($(this).val() != "Throwball - Women"){
			$('#playerGender_div').show();
			$('#female_Gender_div').hide();
			}
		else{
			$('#playerGender_div').hide();
			$('#female_Gender_div').show();
		}
		if($(this).val() == "Tennis Singles - Men"){
			document.getElementById('playerGender').value="Male";
			document.getElementById('playerGender').disabled='disabled';
		}else{
			$('#playerGender').removeAttr('disabled');
		}
		if($(this).val() == "Table Tennis Singles - Jrs" || $(this).val() == "Tennis Singles - Jrs")
		$('#player_Age_generic_div').show();
	if($(this).val() == "Chess - 8-12yrs" )
		$('#player_chess_Age_8_12_div').show();		
	if($(this).val() == "Chess - 13-18yrs")
		$('#player_chess_Age_13_18_div').show();		
		// $('#otherField').attr('required','');
		// $('#otherField').attr('data-error', 'This field is required.');
	} else if ($(this).val() == "Badminton Doubles - Adults" || $(this).val() == "Tennicoit Doubles - Womens") {
		$('#playerFullName_div').hide();
		$('#playerGender_div').hide();
		$('#female_Gender_div').hide();
		$('#volleyGender_div').hide();
		$('#player_chess_Age_8_12_div').hide();
		$('#player_chess_Age_13_18_div').hide();
		$('#player_Age_generic_div').hide();
		$('#player1FullName_div').show();
		$('#player2FullName_div').show();
		$('#player1Gender_div').show();
		$('#player2Gender_div').show();
		if($(this).val() == "Tennicoit Doubles - Womens"){
			document.getElementById('player1Gender').value="Female";
			document.getElementById('player2Gender').value="Female";
			document.getElementById('player1Gender').disabled='disabled';
			document.getElementById('player2Gender').disabled='disabled';
		}else{
			$('#player1Gender').removeAttr('disabled');
			$('#player2Gender').removeAttr('disabled');
		}
		$('#teamName_div').show();
		$('#email_div').show();
		$('#contactPhone_div').show();
		$('#register_button').removeAttr('disabled');
		$('#playerFullName').removeAttr('required');
		$('#registration_fee_div').show();
		var value = registrationFeeArray[$(this).val()] != null ?registrationFeeArray[$(this).val()]:defaultFee;
		document.getElementById('registrationFee').value=value;
		// $('#otherField').attr('required','');
		// $('#otherField').attr('data-error', 'This field is required.');
	}
		});
		$("#sportType").trigger("change");
		
		
$("#sportsRegisterForm").submit(function(event){

if(document.getElementById("agree").checked == false){
alert("Please Accept Terms and Conditions");
return false;
}
var sportsType = document.getElementById('sportType').value;
if(sportsType == 'VolleyBall' ||  sportsType == "Kho Kho - Women"){
if(sportsType == 'VolleyBall' )
	$('#femaleGender').remove();
else if(sportsType == "Kho Kho - Women")
	$('#volleyGender').remove();
	$('#player1FullName').remove();
	$('#playerGender').remove();
	$('#playerAge').remove();
	$('#chess_8_12_Age').remove();
	$('#chess_13_18_Age').remove();
	$('#player1Gender').remove();
	$('#player2Gender').remove();
	$('#player1FullName').remove();
	$('#player2FullName').remove();
}else if (sportsType == "Badminton Doubles - Adults" || sportsType == "Tennicoit Doubles - Womens") {
	$('#playerFullName').remove();
	$('#playerGender').remove();
	$('#volleyGender').remove();
	$('#femaleGender').remove();
	$('#femaleGender').remove();
	$('#playerAge').remove();
	$('#chess_8_12_Age').remove();
	$('#chess_13_18_Age').remove();
	}else if (sportsType == "Table Tennis Singles - Adults" || sportsType == "Table Tennis Singles - Jrs" 
			    || sportsType == "Tennis Singles - Men" || sportsType == "Tennis Singles - Jrs" 
					 || sportsType == "Chess - 8-12yrs" || sportsType == "Chess - 13-18yrs"
					 || sportsType == "Throwball - Women") {
		$('#volleyGender').remove();
		$('#player1FullName').remove();
		$('#teamName').remove();
		$('#player1Gender').remove();
		$('#player2Gender').remove();
		$('#player1FullName').remove();
		$('#player2FullName').remove();
		
		if(sportsType == "Throwball - Women"){
			$('#chess_8_12_Age').remove();
			$('#chess_13_18_Age').remove();
			$('#playerAge').remove();
			}
		if(sportsType == "Tennis Singles - Jrs" || sportsType == "Table Tennis Singles - Jrs"){
			$('#femaleGender').remove();
			$('#chess_8_12_Age').remove();
			$('#chess_13_18_Age').remove();
		}
		if(sportsType == "Table Tennis Singles - Adults")
		 {
			 $('#femaleGender').remove();
			 $('#playerAge').remove();
			 $('#chess_8_12_Age').remove();
			$('#chess_13_18_Age').remove();
	  	 }
		if(sportsType == "Tennis Singles - Men"){
			$('#femaleGender').remove();
			$('#chess_8_12_Age').remove();
			$('#playerAge').remove();
			$('#chess_13_18_Age').remove();
		}
	if(sportsType == "Chess - 8-12yrs" )
	{
		$('#femaleGender').remove();
			$('#chess_13_18_Age').remove();
			$('#playerAge').remove();
	}
	if(sportsType == "Chess - 13-18yrs")
	{
		$('#femaleGender').remove();
			$('#chess_8_12_Age').remove();
			$('#playerAge').remove();
	}	
		// $('#otherField').attr('required','');
		// $('#otherField').attr('data-error', 'This field is required.');
	}


	var post_url = $(this).attr("action"); //get form action url
	var request_method = $(this).attr("method"); //get form GET/POST method
	var form_data = $(this).serialize(); //Encode form elements for submission
	$.ajax({
		url : post_url,
		type: request_method,
		crossDomain: true,
		dataType: 'jsonp',
		data : form_data
	}).done(function(response){ //
		alert(response);
	});
});
