(function () {
  var FAQS = [
    ["Who is invited to which events?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    ["How do I RSVP?", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    ["What should I wear?", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."],
    ["Can I bring children?", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ["Is there parking at the venue?", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."],
    ["What happens at a Sangeet?", "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."],
    ["What if it rains?", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."]
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
    a.textContent = answer;
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
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (window.history && window.history.pushState) {
        history.pushState(null, "", href);
      } else {
        location.hash = href;
      }
    });
  });
})();
