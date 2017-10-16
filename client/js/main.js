$(function(){
	var win = $(window),
		doc = $(document),
		body = $('body'),
		$self = $(this);
		
	// File upload
    $('.file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $(this).parent('label').siblings('span').html(filename);
    });

    function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

  // Validation
   var inputName = $('#name');
   var inputPhone = $('#phone');
   var inputEmail = $('#email');
   var inputMessage = $('#message');

		$('#contact__form').on('submit',function(e){
			if(inputName.val() == '') {
				inputName.parents('.form-group').addClass('error');
			}
			if(inputPhone.val() == '') {
				inputPhone.parents('.form-group').addClass('error');
			}
			if(inputEmail.val() == '') {
				inputEmail.parents('.form-group').addClass('error');
				inputEmail.siblings('.form-group__error').text('Error: Please enter an email');
			} else if( !validateEmail(inputEmail.val()) ) {
				inputEmail.parents('.form-group').addClass('error');
				inputEmail.siblings('.form-group__error').text('Error: Please enter a valid email');
			}
			if(inputMessage.val() == '') {
				inputMessage.parents('.form-group').addClass('error');
			}
			if( $(this).find('.form-group.error').length ) {
				e.preventDefault();
			}
		});

		$("#contact__form").on('focus', 'input,textarea', function(e){
			$(this).parents('.form-group').removeClass('error');
		});

		// Responsive Menu

		$('.toggle-menu').on('click', function(){
			$('body').toggleClass('menu-open');
		});

});