;
(function ($) {
    $(document).ready(function () {
        let lastPage = ''

        $('#new-quote-button').on('click', function (event) {
            event.preventDefault()
            getQuote()
        })

        function getQuote() {
            lastPage = document.URL
            $.ajax({
                    method: 'GET',
                    url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
                })
                .done(function (data) {
                    const quote = data.shift()
                    var newContent = quote.content.rendered
                    var newTitle = quote.title.rendered
                    $('.entry-content').empty()
                    $('.entry-content').append(newContent)
                    $('.entry-title').empty()
                    $('.entry-title').append('&mdash;' + newTitle)
                    $('source').empty()
                    if (source.length > 0 && sourceUrl.length > 0) {
                        $('source').append(',<a href=" ' + sourceUrl + ' ">') + source + '</a>';
                    } else if (source.length > 0) {
                        $('.source').append(',' + source);

                    } else if (sourceUrl.length > 0) {
                        $('.source').append(',<a href=" ' + sourceUrl + ' ">') + source + '</a>';

                    }


                    history.pushState(null, null, qod_vars.home_url + '/' + quote.slug)
                })
                .fail(function () {

                    $('.entry-content').empty();
                    $('.entry-title').empty();
                    $('.source').empty();

                    $('.entry-content').append('It is fine to celebrate success');
                    $('.entry-title').append('&mdash' + 'Bill');
                    $('.source').append('error');
                })
        } // end of get quote



        $(window).on('popstte', function () {
            window.location.replace(lastPage)
        }) // outside the function

        // submit a form and create a new quote post

        $('quote-submission-form').on('sumbit', function (event) {
            event.preventDefault()

            postQuote()

            const quoteTitle = $('#quote-auther').val();
            const quoteContent = $('#quote-content').val();
            const quoteSource = $('#quote-source').val();
            const quoteSourceUrl = $('#quote-source-url').val();

        })

        function postQuote() {
            $.ajax({
                    method: 'post',
                    url: qod_vars.rest_url + 'wp/v2/posts',
                    data: {
                        'title': 'quoteTitle',
                        'content': 'quoteContent',
                        '_qod_quote_source': 'quoteSource',
                        '_qod-quote_source_url': 'quoteSourceUrl',
                        'status': 'publish'
                    },

                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-WP-Nonce', red_vars.wpapi_nonce)
                    }
                })
                .done(function () {
                    $('#quote-submission-form').hide();
                    $('.quote-submission-wrapper').append(api_vars.sucess)
                        .sildeDown('slow');
                })
                .fail(function () {
                    $('#quote-submission-form').hide();
                    $('.quote-submission-wrapper').append(api_vars.failure);
                })
        }
    }) // end of doc ready
})(jQuery)