

const myAcordion = document.querySelectorAll('.acordion');

for (var i = 0; i < myAcordion.length; i++) {
    myAcordion[i].addEventListener('click', function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    
}