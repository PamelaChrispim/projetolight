function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('scr', './assets/avatar-ligth.png')
  } else {
    // se tiver sem a light mode, manter a imagem normal
    img.setAttribute("scr", "./assets/avatar.png")
  }

  // if(html.classList.contains("light")) {
  //   html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  // }
}