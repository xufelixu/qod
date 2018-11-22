(function($) {
	$(document).ready(function() {
		let lastPage = '';

		// console.log('works');
		//get a random post and append content to the DOM

		$('#new-quote-button').on('click', function(event) {
			event.preventDefault();
			getQuote();
			// console.log('click');
		});

		function getQuote() {
			lastPage = document.URL;

			$.ajax({
				method: 'GET',
				url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
			})
				.done(function(data) {
					const quote = data.shift();

					var newContent = quote.content.rendered;
					var newTitle = quote.title.rendered;
					$('.entry-content').empty();
					$('.entry-content').append(newContent);
					$('.entry-title').empty();
					$('.entry-title').append('&mdash;' + newTitle);

					//apend content to the DOM e.g. replace the quote content with rest API content
					// console.log(data);

					// console.log(data[0]);

					//get slug
					history.pushState(null, null, qod_vars.home_url + '/' + quote.slug);
				})
				.fail(function(err) {
					alert('It is fine to celebrate success but it is more important to heed the lessons of failure.');
					// console.log(err);
				});
		} //end of get quote

		$(window).on('popstte', function() {
			window.location.replace(lastPage);
		}); // outside the function

		//submit a form and create a new quote post

		$('quote-submission-form').on('sumbit', function() {
			event.preventDefault();

			postQuote();
			// get values of your form inputs
			//
			//e.g const quoteTitle=$('#form-id').val();
		});

		function postQuote() {
			$.ajax({
				method: 'post',
				url: qod_vars.rest_url + 'wp/v2/posts',
				data: {
					title: 'quoteTitle'
				},

				beforeSend: function(xhr) {
					xhr.setRequestHeader('X-WP-Nonce', red_vars.wpapi_nonce);
				}
			})
				.done(function(response) {
					//.sideup the form
					//append a success msg
				})
				.fail(function() {
					//output a msg for the user saying something went wrong
				});
		}
	}); //end of doc ready
})(jQuery);
