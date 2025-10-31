const date = new Date();
const year = date.getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month = months[date.getMonth()];
document.getElementById("footer-year").innerHTML = `© Copyright Dejan Malinov   ${month}, ${year}`;

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('navbarScroll');

navLinks.forEach(link => {
    
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (!bsCollapse) {
        
      bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    }
    bsCollapse.hide();

    setTimeout(() => {
      targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 300);
  });
});
