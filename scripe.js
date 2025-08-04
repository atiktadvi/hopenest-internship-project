function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('active');
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you for applying! We'll reach out to you soon.");
  e.target.reset();
}
