/* ВскрытьАвто.бел — события аналитики (dataLayer).
   ID аналитики не задан: [[НУЖНО ПОДТВЕРДИТЬ: ID GTM/Метрики/GA4]].
   Подключите GTM/GA4/Метрику — события ниже будут переданы автоматически. */
(function () {
  window.dataLayer = window.dataLayer || [];
  function push(event, extra) {
    try { window.dataLayer.push(Object.assign({ event: event }, extra || {})); } catch (e) {}
  }
  document.addEventListener('DOMContentLoaded', function () {
    // клики по телефону (шапка / мобильная панель / контент)
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.addEventListener('click', function () {
        var loc = a.closest('.mobbar') ? 'mobbar' : (a.closest('.topbar') ? 'header' : 'page');
        push('call_click', { location: loc });
      });
    });
    // формы: открытие и отправка
    document.querySelectorAll('form').forEach(function (f) {
      f.addEventListener('focusin', function () { push('form_open'); }, { once: true });
      f.addEventListener('submit', function () { push('form_submit'); });
    });
    // клик «Оставить заявку»
    document.querySelectorAll('.mobbar .req, a[href*="#hero"], .btn-ghost').forEach(function (a) {
      a.addEventListener('click', function () { push('request_click'); });
    });
    // просмотр страницы услуги
    if (/\/(otkryt-bagazhnik|otkryt-kapot|otkryt-lyuchok-benzobaka|remont-zamka-zazhiganiya|prikurit-avtomobil|remont-avtomobilnyh-zamkov|vskrytie-avto)\//.test(location.pathname)) {
      push('service_view', { service: location.pathname.replace(/\//g, '') });
    }
  });
})();

/* попап «Вызов мастера» — вызывается из кнопки в шапке и из мобильной панели */
function openMasterModal() {
  var m = document.getElementById('masterModal');
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMasterModal() {
  var m = document.getElementById('masterModal');
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMasterModal();
});

/* маска ввода телефона +375 (__) ___-__-__ на всех полях type=tel */
document.addEventListener('DOMContentLoaded', function () {
  function formatPhone(digits) {
    digits = digits.slice(0, 9);
    if (!digits.length) return '';
    var out = '+375 (' + digits.slice(0, 2);
    if (digits.length >= 2) out += ')';
    if (digits.length > 2) out += ' ' + digits.slice(2, 5);
    if (digits.length > 5) out += '-' + digits.slice(5, 7);
    if (digits.length > 7) out += '-' + digits.slice(7, 9);
    return out;
  }
  document.querySelectorAll('input[type="tel"]').forEach(function (inp) {
    inp.addEventListener('input', function () {
      var digits = inp.value.replace(/\D/g, '');
      if (digits.slice(0, 3) === '375') digits = digits.slice(3);
      inp.value = formatPhone(digits);
    });
    inp.addEventListener('focus', function () {
      if (!inp.value) inp.value = '+375 (';
    });
  });
});

/* мобильное меню-бургер */
function openMobileNav() {
  document.documentElement.classList.add('nav-open');
}
function closeMobileNav() {
  document.documentElement.classList.remove('nav-open');
  document.querySelectorAll('.navbar .has-drop.open').forEach(function (d) {
    d.classList.remove('open');
  });
}
function toggleMobileNav() {
  if (document.documentElement.classList.contains('nav-open')) closeMobileNav();
  else openMobileNav();
}
document.addEventListener('DOMContentLoaded', function () {
  var dropToggle = document.querySelector('.navbar .has-drop > a');
  if (dropToggle) {
    dropToggle.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width:767px)').matches) {
        e.preventDefault();
        dropToggle.parentElement.classList.toggle('open');
      }
    });
  }
  document.querySelectorAll('.navbar a:not(.has-drop > a)').forEach(function (a) {
    a.addEventListener('click', closeMobileNav);
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMobileNav();
});
