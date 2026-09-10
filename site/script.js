(function () {
  var FAQS = [
    ["Where's the best place to stay?", "We'd love to have our nearest and dearest stay on site at Martinstown House with us over the wedding weekend. So do consider the Stables and Glamping. If those don't quite meet your needs, get in touch and we can allocate one of our pre-booked rooms. <a href=\"quiz.html\">Take our quiz</a> to help you decide."],
    ["I'm not staying at the venue. How do I get there?", "You'll need to pre-book a mini cab."],
    ["What time will the events finish at Martinstown House?", "There is no cut off time for any of the events. We expect all events to go on till the early hours!"],
    ["What time will the wedding day start?", "Exact timing TBC, but we expect it to be around midday."],
    ["When shall I arrive in Ireland?", "We will be arriving in Dublin on Wednesday 11 August to settle in and to take care of any last minute details. We will let you know where we are staying once we have finalised our travel plans. We expect most guests to fly to Dublin on Thursday 12 or Friday 13 August but do what works best for you!"],
    ["I'm interested in the Stables or Glamping, where can I get ready?", "Don't worry! Everyone staying in the glamping village will have access to hotel style bathrooms, full sized mirror, plug sockets and ironing facilities. There will also be a dedicated space in the main house with all the facilities you need to get ready comfortably."],
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
