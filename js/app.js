document.addEventListener('DOMContentLoaded',()=>{
  if(window.AOS) AOS.init({once:true,duration:650,offset:50});
  if(window.Typed&&document.querySelector('#typed')) new Typed('#typed',{strings:['AI-Powered Solutions.','Predictive Care.','Connected Health.'],typeSpeed:65,backSpeed:35,backDelay:1500,loop:true});
  if(window.particlesJS) particlesJS('particles-js',{particles:{number:{value:38},color:{value:'#ffffff'},opacity:{value:.35},size:{value:2},line_linked:{enable:true,color:'#b9f5ed',opacity:.2},move:{enable:true,speed:1}},interactivity:{events:{onhover:{enable:true,mode:'grab'}}}});
  document.querySelectorAll('.counter').forEach(el=>{const target=+el.dataset.count;let n=0;const tick=()=>{n=Math.min(target,n+Math.ceil(target/50));el.textContent=n;if(n<target)requestAnimationFrame(tick)};tick()});
  document.querySelectorAll('#contactForm').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('button');b.innerHTML='<i class="fa-solid fa-check"></i> Message sent';b.disabled=true}));

  // Services requested for the streamlined homepage: remove the first two cards
  // and present records as a structured reporting capability.
  const serviceCards=[...document.querySelectorAll('#services .service-card')];
  serviceCards.slice(0,2).forEach(card=>card.closest('.col-md-6')?.remove());
  document.querySelectorAll('#services .service-card').forEach(card=>{
    const title=card.querySelector('h3');
    const description=card.querySelector('p');
    if(title?.textContent.trim()==='Automated Records'){
      title.textContent='Automated Reports & Records';
      if(description) description.textContent='Create clear, structured reports and keep every patient record ready when care teams need it.';
      card.querySelector('i')?.classList.replace('fa-file-waveform','fa-file-lines');
    }
  });
});
