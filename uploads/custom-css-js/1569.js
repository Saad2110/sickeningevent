<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

jQuery(document).ready(function( $ ){
    // Your code in here
   $("#surveys").on("change", function() {
	  
    var selectedSurvey = $(this).val();
	    console.log($(`#${selectedSurvey}`));
	   $(".paraiframe").removeClass("showmeactive");
	   if(selectedSurvey !== "redirect"){
		   $(`#${selectedSurvey}`).addClass("showmeactive");
	   }
	   else{
		   window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd31BvtxoB1QSmfJuW12a3sPE-lvuDtyarEd1Sc3yNGgDiufw/viewform?usp=sf_link";
	   }
    
    // Add your custom logic here, depending on what you want to do when the option is changed.
    // For example, you can use an if-else or switch statement to handle different cases based on the selected value.
  });
	
	let searchParamsorg = new URLSearchParams(window.location.search)
	let paramorg = searchParamsorg.get('organizerform');
	
	console.log('formname');
	console.log(paramorg);
	if(paramorg != null){
		$('#surveys').val(paramorg);
		$('.paraiframe').removeClass('showmeactive');
		var selected_form = $('#surveys').find(":selected").val();
		$('#' + selected_form).addClass('showmeactive');
// 		paraiframe
	}
	
	
});</script>
<!-- end Simple Custom CSS and JS -->
