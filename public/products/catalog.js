document.addEventListener('click',event=>{
 const link=event.target.closest('a');
 if(!link||typeof window.gtag!=='function')return;
 const kind=link.matches('.button,.back')?'circle_info':link.matches('.reading a')?'practice_article':null;
 if(kind)window.gtag('event','circle_catalog_click',{cta_kind:kind,link_url:link.href});
});
