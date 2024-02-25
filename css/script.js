document.getElementById("aboutme").style.display= "block";
function affichage(event, selectionner) {
    var i, sect, rub,
    sect = document.querySelectorAll('.contenu')
    for (let i =0; i < sect.length; i++) {
        sect[i].style.display = "none";
        
    }
    rub = document.getElementsByClassName('rubrique');
    for (let i = 0; i < rub.length; i++) {
        rub[i].className = rub[i].className.replace("active","")
        
    }
    document.getElementById(selectionner).style.display = "block"
    event.currentTarget.className += 'active'
    event.preventDefault()
    
};

$(document).ready(function () {
    $(".title-contact, .contact-email").fadeIn("slow");
});













