/* Tech Titans — site behaviour (no dependencies) */
(function () {
  "use strict";

  var CONTACT_EMAIL = "hello@techtitans.training";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Footer year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Scroll reveal (falls back to visible if IntersectionObserver is missing)
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Contact form -> opens the visitor's email app with the message filled in
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var name = (f.get("name") || "").toString().trim();
      var email = (f.get("email") || "").toString().trim();
      var org = (f.get("org") || "").toString().trim();
      var topic = (f.get("topic") || "General enquiry").toString();
      var msg = (f.get("message") || "").toString().trim();

      var subject = "Tech Titans enquiry: " + topic;
      var body =
        "Hi Tech Titans team,\n\n" + msg + "\n\n" +
        "— " + name + (org ? "\n" + org : "") + "\nReply to: " + email;

      var href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      var status = document.getElementById("form-status");
      if (status) status.textContent = "Opening your email app… if nothing happens, email us directly at " + CONTACT_EMAIL + ".";
      window.location.href = href;
    });
  }
})();
