//a way to switch images 
//bring in all the panels, querySelector allows as to get anything. querylist is similiar to an array, its a nodelist


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() //remove the class of active on all the other ones
        panel.classList.add('active')
    })
})

//this function loops throught the classes and removes all the 

function removeActiveClasses(){
    panels.forEach(panel=> {
        panel.classList.remove('active')
    })
}

