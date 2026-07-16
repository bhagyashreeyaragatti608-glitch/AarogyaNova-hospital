(() => {
  const brand='AarogyaNova Hospital';
  const saved=localStorage.getItem('aarogyanova-theme');
  if(saved==='dark') document.body.classList.add('dark');

  // Apply the approved hospital name consistently to shared page chrome and copy.
  document.title=document.title.replace(/Smart Hospital/gi,brand);
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(node.parentElement?.closest('script,style')) return;
    node.nodeValue=node.nodeValue.replace(/Smart Hospital/gi,brand);
  });
  document.querySelectorAll('.navbar-brand').forEach(logo=>{
    logo.innerHTML='<i class="fa-solid fa-heart-pulse"></i> AROGYA<span>NOVA</span> <small>HOSPITAL</small>';
    logo.setAttribute('aria-label',brand);
  });

  document.querySelectorAll('.theme-toggle').forEach(btn=>btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('aarogyanova-theme',document.body.classList.contains('dark')?'dark':'light');
    btn.innerHTML=document.body.classList.contains('dark')?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
  }));
})();
