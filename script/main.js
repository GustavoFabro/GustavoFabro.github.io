$(document).ready(onPageReady);

function onPageReady() {
    $('.mobile-toggle-menu').on('click', e => {
        $('.mobile-menu').toggleClass('selected')
    });

    $('.menu-item, .menu-mobile-item').on('click', e => {
        const target = e.target.hasAttribute('data-for')? e.target : e.target.parentElement
        const targetDataFor = $(target).attr('data-for')

        $('[id^="content"]').hide()
        $('.selected').toggleClass('selected')

        $(`[id="content-${targetDataFor}"]`).fadeTo("slow", 1)
        $(target).toggleClass('selected')
    })
}