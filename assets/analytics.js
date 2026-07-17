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
