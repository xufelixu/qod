(function ($) {
    $(document).ready(function () {
        let lastPage = ''

        $('#new-quote-button').on('click', function (event) {
            event.preventDefault();
            getQuote();
        })

        function getQuote() {
            lastPage = document.URL
            $.ajax({
                    method: 'GET',
                    url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
                })

                .done(function (data) {
                    console.log(data[0]);
                    const sourceUrl = data[0]._qod_quote_source_url;
                    const source = data[0]._qod_quote_source;
                    const newContent = data[0].content.rendered;
                    const newTitle = data[0].title.rendered;
                    $('.entry-content').empty();
                    $('.entry-content').append(newContent);
                    $('.entry-title').empty();
                    $('.entry-title').append('&mdash;' + newTitle);
                    $('.source').empty();
                    if (source.length > 0 && sourceUrl.length > 0) {
                        $('.source').append(',<a href=" ' + sourceUrl + ' ">' + source + '</a>');
                    } else if (source.length > 0) {
                        $('.source').append(',' + source);
                    }

                    history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug)
                })
                .fail(function () {

                    $('.entry-content').empty();
                    $('.entry-title').empty();
                    $('.source').empty();
                    $('.entry-content').append('It is fine to celebrate success');
                    $('.entry-title').append('&mdash' + 'Bill Gates');
                    $('.source').append('error');
                })
        } // end of get quote


        $(window).on('popstate', function () {
            window.location.replace(lastPage)
        }) // outside the function

        // submit a form and create a new quote post

        $('#quote-submission-form').on('submit', function (event) {
            event.preventDefault();

            postQuote();

        })

        function postQuote() {
            const quoteTitle = $('#quote-auther').val();
            const quoteContent = $('#quote-content').val();
            const quoteSource = $('#quote-source').val();
            const quoteSourceUrl = $('#quote-source-url').val();

            $.ajax({
                    method: 'post',
                    url: qod_vars.rest_url + 'wp/v2/posts',
                    data: {
                        'title': quoteTitle,
                        'content': quoteContent,
                        '_qod_quote_source': quoteSource,
                        '_qod_quote_source_url': quoteSourceUrl,
                        'status': 'publish'
                    },

                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('X-WP-Nonce', qod_vars.nonce)
                    }
                })
                .done(function () {
                    console.log();
                    $('#quote-submission-form').hide();
                    $('.quote-submission-wrapper').append('Thank your! See you next time!');
                })
                .fail(function () {
                    console.log();
                    $('#quote-submission-form').hide();
                    $('.quote-submission-wrapper').append('Sorry,you must be logged in to submit a quote!');
                })
        }
    }) // end of doc ready
})(jQuery)