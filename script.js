const WA_NUMBER='255718336242';
function waMessage(form){
  const data=new FormData(form);
  const product=data.get('product')||'';
  const quantity=data.get('quantity')||'';
  const condition=data.get('condition')||'';
  const name=data.get('name')||'';
  const phone=data.get('phone')||'';
  const location=data.get('location')||'';
  const date=data.get('date')||'';
  const note=data.get('note')||'';
  const message=`Habari Kuku Kwanza!%0A%0ANataka kufanya oda:%0A• Bidhaa: ${product}%0A• Kiasi: ${quantity}%0A• Hali: ${condition}%0A• Jina: ${name}%0A• Simu: ${phone}%0A• Eneo: ${location}%0A• Tarehe: ${date}%0A• Maelezo: ${note||'Hakuna'}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`,'_blank');
}
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav-list');
  if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('[data-wa]').forEach(a=>a.href=`https://wa.me/${WA_NUMBER}`);
  document.querySelectorAll('form[data-order]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();waMessage(form)}));
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
});
