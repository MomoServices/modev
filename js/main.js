// Nav open tab (Mobile design) ANIMATION
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// (Mobile design) Hamburger ANIMATION

const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//STICKY BAR ...

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Scroll command

$(function() {
  $('.my-portfolio').on('click', function(e) {
    e.preventDefault();
    $('html, main').animate({ scrollTop: $($(this).attr('class')).offset().top}, 500, 'linear');
  });
});

// Hero Ends


// Portfolio Starts

// Carousel portfolio
let span = document.getElementsByTagName('span');
	let project = document.getElementsByClassName('project')
	let project_page = Math.ceil(project.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 40;
	// mobile_view
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (project == 1){l = 0; }
		for(const i of project)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of project){
			if (project_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
