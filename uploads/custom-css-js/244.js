<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

jQuery(document).ready(function( $ ){
    // Your code in here
	$(window).scroll(function() {
		 if ($('#itdoestoo').length) {
  var sectionOffset = $('#itdoestoo').offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();

  if (scrollTop + windowHeight > sectionOffset) {
    $('.cardanimate').addClass('newcards');
  } else {
    $('.cardanimate').removeClass('newcards');
  }
		 }
});
});
</script>
<!-- end Simple Custom CSS and JS -->
