// ========== toggle icon navbar ========


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classlist.toggle('active')
}


// =======scroll active link=======
let section = document.querySelectoraALL('section');
let navlinks = document.querySelectoraALL('header nav a');
window.onscroll= () =>{
    sec.forEach(Sec => {
        let top= window.scrollY;
        let offset =  section.offsettop-150;
        let height= section.offsetHeight;
        let id = Sec.getAttribute('id');
         


        if(top >= offset && top < offset + height){
            navlinks.foreach.apply(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classlist.add('active');

            });

        };
        
    });
    // =========sticky navbar ===========
    let header = document.querySelector('header');
    header.classlist.toggle('sticky',window.scrollY > 100);
    // =======remove toggle icon and navbar ==========
    menuicon.classlist.remove('fa-xmark');
    navbar.classlist.remove('active');
};