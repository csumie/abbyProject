<script type="text/javascript">
	$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });

	$(function(){

		// Calling Register Form
		$("#register_form").click(function(){
			$(".header_title").text('Register');
			return false;
		});

	})
</script>