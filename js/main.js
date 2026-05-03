(function(){
  const page=document.body.dataset.page||"home";
  const isHome=page==="home";
  const sectionHref=(id)=>(isHome?`#${id}`:`/index.html#${id}`);
  const headerRoot=document.getElementById("site-header");
  if(headerRoot){headerRoot.innerHTML=`
    <header class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-5 relative z-50">
      <nav class="glass-panel rounded-[1.45rem] px-4 sm:px-5 py-3 flex items-center justify-between gap-4">
        <a href="/index.html" class="flex items-center gap-3 min-w-0">
          <div class="h-10 w-10 rounded-[14px] overflow-hidden border border-white/60 shadow-soft bg-primary-100"><img src="/assets/icons/favicon.png" alt="Vault icon" class="h-full w-full object-cover" onerror="this.onerror=null;this.src='/assets/icons/favicon.svg';" /></div>
          <div class="leading-tight min-w-0"><div class="font-bold tracking-[-.02em] text-text">Vault</div><div class="text-xs text-text3 truncate">Tu memoria inteligente</div></div>
        </a>
        <div class="hidden md:flex items-center gap-7 text-sm font-medium text-text2">
          <a class="hover:text-primary-600" href="${sectionHref("how")}">Captura</a><a class="hover:text-primary-600" href="${sectionHref("features")}">Biblioteca</a><a class="hover:text-primary-600" href="${sectionHref("chat")}">Vault AI</a><a class="hover:text-primary-600" href="${sectionHref("read")}">Lectura</a>
        </div>
        <a href="${sectionHref("waitlist")}" class="inline-flex rounded-[1rem] px-4 py-2 text-sm font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-glow">Unirme</a>
      </nav>
    </header>`}
  const footerRoot=document.getElementById("site-footer");
  if(footerRoot){footerRoot.innerHTML=`<footer class="border-t border-border bg-white/50 backdrop-blur-xl"><div class="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div class="text-sm text-text3">© <span id="year"></span> Vault. All rights reserved.</div><div class="text-sm text-text3">Hecho para guardar lo importante. <span class="hidden sm:inline">•</span> <a class="hover:text-primary-600" href="/privacy">Privacy</a> <span>•</span> <a class="hover:text-primary-600" href="/terms">Terms</a></div></div></footer>`}
  const yearNode=document.getElementById("year"); if(yearNode)yearNode.textContent=new Date().getFullYear();
  const waitlistForm=document.getElementById("waitlist-form"); if(waitlistForm){waitlistForm.addEventListener("submit",function(event){event.preventDefault();const thanks=document.getElementById("thanks");if(thanks)thanks.classList.remove("hidden");waitlistForm.reset();});}
})();
