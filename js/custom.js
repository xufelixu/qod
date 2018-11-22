(function ($) {
    $(document).ready(function () {
        // console.log('works');
        //get a random post and append content to the DOM

        $('#new-quote-button').on('click', function (event) {
            event.preventDefault();
            getQuote();
            // console.log('click');
        });

        function getQuote() {
            $.ajax({
                method: 'GET',
                url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
            }).done(function (data) {

                var post = data.shift();

                var newContent = post.content.rendered;
                var newTitle = post.title.rendered;
                $('.entry-content').empty();
                $('.entry-content').append(newContent);
                $('entry-title').empty();
                $('entry-title').append('&mdash;' + newTitle);


                //apend content to the DOM e.g. replace the quote content with rest API content
                // console.log(data);


            }).fail(function (err) {

                alert('It is fine to celebrate success but it is more important to heed the lessons of failure.');
                // console.log(err);
            });

        }

    });


})(jQuery);