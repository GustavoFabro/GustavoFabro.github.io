$(document).ready(onPageReady);

function onPageReady() {
    $('.btn-view').click(e => {
        let target = $(e.target).attr('data-for');

        $('[id^="content"]').hide()

        $(`[id="content-${target}"]`).fadeTo("slow", 1);
    })
}