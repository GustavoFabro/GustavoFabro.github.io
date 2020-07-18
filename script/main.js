$(document).ready(onPageReady)

function onPageReady() {
  function init() {
    configureSection()
    // configureText()
    configureProjectItems()
    configureMenu()
    //configureTerminal()
  }
  
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
      return new Date().getFullYear() - 2016
    }

    function splep(mili) {
      return new Promise(resolve => setTimeout(() => resolve(), mili))
    }

    const introText = `I'm Gustavo Fabro, full stack web developer with ${getYearsWorking(4)} years of professional experience in the field. I've been programming since I was 17. Bachelor in computer science from UNESC (2014 - 2018). 
    My favorite programming language is Javascript, and most of my studies are focused on its ecosystem 
    (Typescript, React, ReactNative, Node, etc.). I'm also a huge fan of clean code.`

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

  function configureProjectItems() {
    $(".project-item").on("click", e => {
      const url = e.currentTarget.getAttribute('to') 

      if (url) {
        window.open(url)
      } 
    })
  }

  function configureMenu() {
    $(".mobile-toggle-menu").on("click", e => {
      $(".mobile-menu").toggleClass("selected")
    })
  
    $(".menu-item, .menu-mobile-item").on("click", e => {
      const target = e.target.hasAttribute("data-for")
        ? e.target
        : e.target.parentElement
  
      setSection(target)
    });
  }

  function openLink(url) {

  }

  init()
}
