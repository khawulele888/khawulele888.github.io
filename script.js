const menu=document.querySelector('.menu-button');
const mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));

document.getElementById('year').textContent=new Date().getFullYear();
const timeEl=document.getElementById('local-time');
function updateTime(){timeEl.textContent=new Intl.DateTimeFormat('en-ZA',{timeZone:'Africa/Johannesburg',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())+' SAST'}
updateTime();setInterval(updateTime,30000);

const bar=document.querySelector('.progress span');
const header=document.querySelector('.topbar');
const links=[...document.querySelectorAll('.desktop-nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
function scrollState(){const y=scrollY;header?.classList.toggle('scrolled',y>28);const max=document.documentElement.scrollHeight-innerHeight;if(bar)bar.style.width=(max?Math.min(100,y/max*100):0)+'%';let current='';sections.forEach(s=>{if(y>=s.offsetTop-170)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))}
addEventListener('scroll',scrollState,{passive:true});scrollState();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const stage=document.querySelector('[data-tilt]');
if(stage&&!matchMedia('(prefers-reduced-motion: reduce)').matches){stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;stage.style.transform=`rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*7).toFixed(2)}deg)`});stage.addEventListener('pointerleave',()=>stage.style.transform='rotateX(0deg) rotateY(0deg)')}
