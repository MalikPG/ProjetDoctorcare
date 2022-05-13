window.addEventListener('scroll', onScroll)

onScroll()
function onScroll()  {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)


}

function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    console.log(targetLine)
    // verificar se a seção passou da linha 
    // quais daddos vou precisar?

    // o topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight
    
    console.log('altura da seção', sectionHeight)
    // o topo da seção chegou ou ultrapaossou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    console.log('topo da seção', sectionTop)
    // informações dos dados e da lógica
    console.log('O topo da seção chegou ou ultrapassou a linha?',
       sectionTopReachOrPassedTargetLine)
 
    //  verificar se a base está abaixo da linha alvo 
    // quais dados vou precisar?

    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <=
    targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine &&
    !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }

    
}

function showNavOnScroll() {
    if(scrollY > 0)  {
        navigation.classList.add('scroll')
    } else{
       navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 550)  {
        backToTopButton.classList.add('show')
    } else{
       backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
    #home img,
    #home stats,
    #services,
    #services header,
    #services .card
    #about,
    #about header,
    #about .content`)
