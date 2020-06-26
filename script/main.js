$(document).ready(onPageReady)

function onPageReady() {
  $(".mobile-toggle-menu").on("click", e => {
    $(".mobile-menu").toggleClass("selected")
  })

  $(".menu-item, .menu-mobile-item").on("click", e => {
    const target = e.target.hasAttribute("data-for")
      ? e.target
      : e.target.parentElement

    setSection(target)
  });

  function setSection(target) {
    const targetDataFor = $(target).attr("data-for")

    $('[id^="content"]').hide();
    $(".selected").toggleClass("selected")

    $(`[id="content-${targetDataFor}"]`).fadeTo("slow", 1)

    $(target).toggleClass("selected")
  }

  function configureSection() {
    const sessaoIntro = $('[data-for="intro"]')[0]

    setSection(sessaoIntro)
  }

  async function configureText() {
    function getYearsWorking() {
      return 4
    }

    function splep(mili) {
      return new Promise(resolve => setTimeout(() => resolve(), mili))
    }

    const introText = `Hi, I'm Gustavo Fabro, full stack web developer with ${getYearsWorking()} years of professional experience in the field. 
    I've been programming since I was 17. 
    Bachelor in computer science from UNESC (2014 - 2018).`;

    const element = $("#content-intro p")[0]
    const introTextParts = introText.split("")

    for (let index = 0; index < introTextParts.length; index++) {
      const text = introTextParts[index]

      await splep(20)
      $(element).append(text)
    }
  }

  function configureTerminal() {
    const terminalElement = $("#terminal")

    terminalElement.keydown(e => {
      if (e.keyCode == 13) {
        const jsOutput = eval(terminalElement.val())

        $("#output-terminal").text(jsOutput)
      }
    })
  }

  function init() {
    configureSection()
    configureText()
    //configureTerminal()
  }

  init()
}
