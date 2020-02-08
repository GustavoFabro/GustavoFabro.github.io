$(document).ready(onPageReady);

function onPageReady() {
  $(".mobile-toggle-menu").on("click", e => {
    $(".mobile-menu").toggleClass("selected");
  });

  $(".menu-item, .menu-mobile-item").on("click", e => {
    const target = e.target.hasAttribute("data-for")
      ? e.target
      : e.target.parentElement;

    setSection(target);
  });

  function setSection(target) {
    const targetDataFor = $(target).attr("data-for");

    $('[id^="content"]').hide();
    $(".selected").toggleClass("selected");

    $(`[id="content-${targetDataFor}"]`).fadeTo("slow", 1);

    $(target).toggleClass("selected");
  }

  function configureSection() {
    const sessaoIntro = $('[data-for="intro"]')[0];

    setSection(sessaoIntro);
  }

  async function configureText() {
    function getYearsWorking() {
      return 3;
    }

    function splep(mili) {
      return new Promise(resolve => setTimeout(() => resolve(), mili));
    }

    const textIntro = `Hi, I'm Gustavo, full stack developer with ${getYearsWorking()} years of experience in the field. Bachelor in computer science from UNESC (2014 - 2018).`;

    const element = $("#content-intro p")[0];
    const textIntroParts = textIntro.split("");

    for (let index = 0; index < textIntroParts.length; index++) {
      const text = textIntroParts[index];

      await splep(20);
      $(element).append(text);
    }
  }

  function configureTerminal() {
    const terminalElement = $("#terminal");

    terminalElement.keydown(e => {
      if (e.keyCode == 13) {
        const jsOutput = eval(terminalElement.val());

        $("#output-terminal").text(jsOutput);
      }
    });
  }

  function init() {
    configureSection();
    configureText();
    configureTerminal();
  }

  init();
}
