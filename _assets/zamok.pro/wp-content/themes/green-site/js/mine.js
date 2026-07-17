"use strict";

(function (a) {
  var b = Array.prototype.slice.call(document.querySelectorAll(".more-question"));
  b && b.forEach(function (a) {
    a.addEventListener("click", function () {
      var b = Array.prototype.slice.call(a.parentElement.children);
      b.forEach(function (b) {
        b.style.display ? (b.style.display = "", a.innerHTML = "<span>\u0415\u0449\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</span>") : (b.style.display = "block", a.innerHTML = "<span>\u0421\u043A\u0440\u044B\u0442\u044C</span>");
      });
    });
  });

  var c = document.querySelector(".more__feedback"),
    cc = document.querySelector(".video__button_desktop"),
    d = document.querySelector(".modal_review"),
    dd = document.querySelector(".modal_phone"),
    e = d.querySelector(".close"),
    ee = dd.querySelector(".close"),
    f = d.querySelector("input.input-photo"),
    g = d.querySelector(".send-photo"),
    h = d.querySelector(".send-photo .label-text");
  c && c.addEventListener("click", function () {
    d.classList.toggle("hidden");
  });
  cc && cc.addEventListener("click", function () {
    dd.classList.toggle("hidden");
  });
  ee.addEventListener("click", function () {
    dd.classList.toggle("hidden");
  });
  e.addEventListener("click", function () {
    d.classList.toggle("hidden");
  }), f.addEventListener("change", function (a) {
    a.target.value && (h.innerText = "\u0424\u043E\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043E", g.classList.add("success"));
  });
  var i = 7;
  var j = document.querySelector(".additional-services__more"),
    k = document.querySelector(".additional-services__hide"),
    l = Array.prototype.slice.call(document.querySelectorAll(".additional-services .service"));
  l && l.length - 1 > 7 && j && (j.classList.remove("hidden-service"), l.forEach(function (a, b) {
    b > i && a.classList.add("hidden-service");
  }), j.addEventListener("click", function () {
    j.classList.add("hidden-service"), k.classList.remove("hidden-service"), l.forEach(function (a, b) {
      b > i && a.classList.remove("hidden-service");
    });
  }), k.addEventListener("click", function () {
    j.classList.remove("hidden-service"), k.classList.add("hidden-service"), l.forEach(function (a, b) {
      b > i && a.classList.add("hidden-service");
    });
  }));
  var m = document.querySelector("video");

  if (m) {
    var _a = document.querySelector(".video__button_desktop").classList;
    var _b = document.querySelector(".video__button_mobile").classList;
    m.addEventListener("pause", function () {
      _a.add("visible");
      _b.add("visible");
    }), m.addEventListener("playing", function () {
      _a.remove("visible");
      _b.remove("visible");
    }), m.addEventListener("timeupdate", function () {
      23.3 < m.currentTime && (_a.add("visible"), _b.add("visible"));
    });
  }

  // if (m) {
  //   var _a = document.querySelector(".video__button_mobile").classList;
  //   m.addEventListener("pause", function () {
  //     _a.add("visible");
  //   }), m.addEventListener("playing", function () {
  //     _a.remove("visible");
  //   }), m.addEventListener("timeupdate", function () {
  //     23.3 < m.currentTime && _a.add("visible");
  //   });
  // }

  var n = document.querySelector("span.more__reviews"),
    o = Array.prototype.slice.call(document.querySelectorAll(".review"));
  o && n && "none" !== window.getComputedStyle(o[o.length - 1], null).getPropertyValue('display') && n.classList.add("hidden"), n && n.addEventListener("click", function () {
    var a = 0;
    o && "none" === window.getComputedStyle(o[o.length - 1], null).getPropertyValue('display') && o.forEach(function (b) {
      "none" === window.getComputedStyle(b, null).getPropertyValue('display') && 6 > a && (b.style.display = "inline-block", a++);
    }) || "none" !== window.getComputedStyle(o[o.length - 1], null).getPropertyValue('display') && n.classList.add("hidden");
  }), Array.prototype.slice.call(document.querySelectorAll("input.input-phone")).forEach(function (a) {
    return a.addEventListener("invalid", function () {
      a.validity.patternMismatch && a.setCustomValidity("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 +7 (YYY) XXX-XX-XX") || a.setCustomValidity("");
    });
  }), a(".modal-review .input, .modal-review .check").on("invalid", function () {
    a(".modal-review .modal-container").addClass("swing"), setTimeout(function () {
      return a(".modal-review .modal-container").removeClass("swing");
    }, 1e3);
  }), a(".modal_review form").on("submit", function (b) {
    b.preventDefault();
    if (!a(".modal_review form [name=user]").val()) return alert('Введите свое имя');
    if (!a(".modal_review form [name=city]").val()) return alert('Введите свой город');
    if (!a(".modal_review form [name=text]").val()) return alert('Введите свой отзыв');
    if (!a("form .input-photo").get(0).files[0]) return alert('Выберите фотографию');
    var formData = new FormData();
    return formData.append("name", a(".modal-review form [name=user]").val()), formData.append("city", a(".modal-review form [name=city]").val()), formData.append("msg", a(".modal-review form [name=text]").val()), formData.append("photo", a("form .input-photo").get(0).files[0]), a.ajax({
      url: "/wp-admin/admin-ajax.php?action=ajax_order",
      method: "post",
      contentType: !1,
      processData: !1,
      data: formData,
      success: function success() {
        a(b.target).html("\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438, \u0441\u043F\u0430\u0441\u0438\u0431\u043E!"), setTimeout(function () {
          return a(".modal-review").addClass("hidden");
        }, 3e3);
      },
      error: function error() {
        a(b.target).html("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430"), setTimeout(function () {
          return a(".modal-review").addClass("hidden");
        }, 3e3);
      }
    }), !1;
  }), document.addEventListener("click", function (a) {
    a.target.classList.contains("modal-review") && a.target.classList.add("hidden");
  }), a(".form").on("submit", function (b) {
    b.preventDefault();
    var c = new FormData(),
      d = a("button", b.target),
      e = a("label.label-tel", b.target),
      f = d.html(),
      length = a("[name=phone]", this).val().length,
      g = this;
    if (length === 0) return alert('Введите номер телефона');
    if (length !== 18) return alert('Введите номер телефона в формате: +7 (YYY) XXX-XX-XX');
    return c.append("user", a("[name=user]", this).val() || "\u041A\u043B\u0438\u0435\u043D\u0442"), c.append("phone", a("[name=phone]", this).val()), a.ajax({
      url: "/wp-admin/admin-ajax.php?action=ajax_order_phone",
      method: "post",
      contentType: !1,
      processData: !1,
      data: c,
      success: function success(a) {
        "Success" === a && (g.reset(), d.html("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E").addClass("success"), setTimeout(function () {
          return d.html(f).removeClass("success");
        }, 3e3));
      },
      error: function error() {
        d.html("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438").addClass("error"), e.html("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u0443 \u043C\u0438\u043D\u0443\u0442"), setTimeout(function () {
          d.html(f).removeClass("error"), e.html("");
        }, 3e3);
      }
    }), !1;
  });
})(jQuery);