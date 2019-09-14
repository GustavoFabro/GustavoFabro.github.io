$(document).ready(onPageReady);

function onPageReady() {
    let btnAbout = $('#btn-about')
    let btnProjects = $('#btn-projects')

    const containerProjects = $('.container-projects')
    const containerAbout = $('.container-about')

    showAboutMe();

    btnAbout.click(e => {
        showAboutMe();
        hideProjects();
    })

    btnProjects.click(e => {
        hideAboutMe();
        showProjects();
    })

    function showAboutMe() {
        containerAbout.animate({
            opacity: 1
        }, 400);
    }

    function hideAboutMe() {
        containerAbout.animate({
            opacity: 0
        }, 400);
    }

    function showProjects() {
        containerProjects.animate({
            opacity: 1
        }, 400);
    }

    function hideProjects() {
        containerProjects.animate({
            opacity: 0
        }, 400);
    }
}