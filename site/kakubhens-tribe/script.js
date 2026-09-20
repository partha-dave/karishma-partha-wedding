(function () {
  var FAQS = [
    ["Where am I staying?", "We've booked a block of rooms for your group at The Firecastle Hotel, Kildare Town. There's nothing you need to book yourselves — if you have any questions about your room, just get in touch via the Just Ask section below."],
    ["How do I get to Martinstown House?", "You'll need to pre-book a mini cab."],
    ["What time will the events finish at Martinstown House?", "There is no cut off time for any of the events. We expect all events to go on till the early hours!"],
    ["What time will the wedding day start?", "Exact timing TBC, but we expect it to be around midday."],
    ["When shall I arrive in Ireland?", "We will be arriving in Dublin on Wednesday 11 August to settle in and to take care of any last minute details. We will let you know where we are staying once we have finalised our travel plans. We expect most guests to fly to Dublin on Thursday 12 or Friday 13 August but do what works best for you!"],
    ["Can I bring my four legged friend?", "Unfortunately, Martinstown House does not allow pets."],
    ["Have a question that hasn't been covered by the FAQs?", "Get in touch with us. Replies may be slower over the next month as we are in the process of moving house!"]
  ];

  var list = document.getElementById("faq-list");
  if (!list) return;

  FAQS.forEach(function (faq, i) {
    var question = faq[0];
    var answer = faq[1];

    var item = document.createElement("div");
    item.className = "faq-item";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "faq-item__q";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "faq-answer-" + i);

    var q = document.createElement("span");
    q.textContent = question;

    var sign = document.createElement("span");
    sign.className = "faq-item__sign";
    sign.textContent = "+";
    sign.setAttribute("aria-hidden", "true");

    button.appendChild(q);
    button.appendChild(sign);

    var a = document.createElement("p");
    a.className = "faq-item__a";
    a.id = "faq-answer-" + i;
    a.innerHTML = answer;
    a.hidden = true;

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      sign.textContent = open ? "+" : "×";
      a.hidden = open;
    });

    item.appendChild(button);
    item.appendChild(a);
    list.appendChild(item);
  });
})();

(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery__item"));
  var lightbox = document.getElementById("lightbox");
  if (!items.length || !lightbox) return;

  var stage = document.getElementById("lightbox-stage");
  var closeBtn = lightbox.querySelector(".lightbox__close");
  var prevBtn = lightbox.querySelector(".lightbox__prev");
  var nextBtn = lightbox.querySelector(".lightbox__next");
  var current = 0;

  function render(index) {
    current = (index + items.length) % items.length;
    var item = items[current];
    var full = item.getAttribute("data-full");
    var alt = item.getAttribute("data-alt") || "";
    stage.innerHTML = full
      ? '<img src="' + full + '" alt="' + alt + '">'
      : '<div class="placeholder placeholder--center">' + alt + "</div>";
  }

  function open(index) {
    render(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  items.forEach(function (item, i) {
    item.addEventListener("click", function () {
      open(i);
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function () {
    render(current - 1);
  });
  nextBtn.addEventListener("click", function () {
    render(current + 1);
  });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") render(current - 1);
    if (e.key === "ArrowRight") render(current + 1);
  });
})();

(function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.length < 2) return;

    link.addEventListener("click", function (e) {
      var target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "auto", block: "start" });

      if (window.history && window.history.pushState) {
        history.pushState(null, "", href);
      } else {
        location.hash = href;
      }
    });
  });
})();

(function () {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;

  function toggle() {
    if (window.scrollY > 500) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
