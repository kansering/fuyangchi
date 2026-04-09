// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const h=this.getAttribute('href');
    if(h!=='#'){e.preventDefault();const t=document.querySelector(h);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});

// Scroll animation observer (fuambu style)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// Product tab switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.classList.add('active');
  // Re-observe new visible cards
  document.querySelectorAll('#tab-' + tabId + ' .fade-in-up').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}

// FAQ toggle
function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}
