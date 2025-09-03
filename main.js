const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

document.addEventListener('DOMContentLoaded', () => {
  // 푸터 연도
  $('#year').textContent = new Date().getFullYear();

  // 모바일 네비 토글
  const toggle = $('#navToggle');
  const list = $('#navList');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // 현재 메뉴 하이라이트(해시 기준)
  const links = $$('.nav-link');
  function highlight(){
    const hash = location.hash || '#latest';
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === hash));
  }
  highlight();
  window.addEventListener('hashchange', highlight);

  // 채팅 버튼 데모
  $('.chat-fab')?.addEventListener('click', () => {
    alert('채팅 위젯 연결 자리입니다 🙂');
  });
});