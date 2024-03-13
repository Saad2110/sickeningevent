<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function( $ ){
	
	$('.form-handle').addClass('hidden');
	
	// Get the initially selected value on page load
	const initiallySelectedValue = $('#dd-forms').val();
	$('#' + initiallySelectedValue).removeClass('hidden');
	
	$('#dd-forms').change(function() {
		
		const selectedValue = $(this).val();

		$('.form-handle').addClass('hidden'); // Hide all divs
		$('#' + selectedValue).removeClass('hidden'); // Show the selected div
		
	});
	
	let searchParams = new URLSearchParams(window.location.search)
	let param = searchParams.get('formname');
	
	console.log('formname');
	console.log(param);
	if(param != null){
		$('#dd-forms').val(param);
		$('.form-handle').addClass('hidden');
	}
	
	
	
	var selected_form = $('#dd-forms').find(":selected").val();
	$('#' + selected_form).removeClass('hidden');

});


jQuery(document).ready(function($) {
	var delay = 1000; setTimeout(function() {
	$('.elementor-tab-title').removeClass('elementor-active');
	$('.elementor-tab-content').css('display', 'none'); }, delay);
});


</script>
<!-- end Simple Custom CSS and JS -->
