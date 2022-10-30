$(function () {
    $('pre').on('click', function (e) {
        if (e.target !== this) return
        $(this).toggleClass('code-block-fullscreen'),
        $('html').toggleClass('code-block-fullscreen-html-scroll')
    });
});