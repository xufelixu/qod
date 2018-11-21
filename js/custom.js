(function ($) {


    $(document).ready(function () {



        console.log('works');

        //get a random post and append content to the DOM

        $('#new-quote-button').on('click', function (event) {
            event.preventDefault();
            getQuote();
            console.log('click');
        });

        function getQuote() {
            $.ajax({
                method: 'GET',
                url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
            }).done(function (data) {
                //apend content to the DOM e.g. replace the quote content with rest API content
                console.log(data);

            }).fail(function (err) { //append a msg for the user or alert a msg saying sth went wrong
                console.log(err);
            });

        }

    });


})(jQuery);