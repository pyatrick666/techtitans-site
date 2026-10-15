/* Tech Titans — site behaviour (no dependencies) */
(function () {
  "use strict";

  var CONTACT_EMAIL = "hello@techtitans.training";

  // Progressive enhancement: content stays visible unless JavaScript
  // successfully prepares the scroll-reveal behaviour.
  document.documentElement.classList.add("js");

  // Mobile navigation toggle and keyboard support.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setNavOpen(open, restoreFocus) {
    if (!toggle || !nav) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open && restoreFocus) toggle.focus();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(toggle.getAttribute("aria-expanded") !== "true", false);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNavOpen(false, false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNavOpen(false, true);
      }
    });

    document.addEventListener("click", function (event) {
      if (toggle.getAttribute("aria-expanded") === "true" &&
          !nav.contains(event.target) && !toggle.contains(event.target)) {
        setNavOpen(false, false);
      }
    });
  }

  // Footer year.
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Scroll reveal: prepare hidden states only after JS is running.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    items.forEach(function (item) { item.classList.add("reveal-ready"); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
  } else {
    items.forEach(function (item) { item.classList.add("in"); });
  }

  // Contact form: validate before opening the visitor's email application.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var nameField = form.elements.namedItem("name");
      var emailField = form.elements.namedItem("email");
      var messageField = form.elements.namedItem("message");
      var status = document.getElementById("form-status");

      nameField.value = nameField.value.trim();
      emailField.value = emailField.value.trim();
      messageField.value = messageField.value.trim();

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) status.textContent = "Please complete the required fields and enter a valid email address.";
        return;
      }

      if (!nameField.value || !messageField.value) {
        if (status) status.textContent = "Please enter your name and a message before continuing.";
        (!nameField.value ? nameField : messageField).focus();
        return;
      }

      var org = (form.elements.namedItem("org").value || "").trim();
      var topic = (form.elements.namedItem("topic").value || "General enquiry").trim();
      var subject = "Tech Titans enquiry: " + topic;
      var body = "Hi Tech Titans team,\n\n" + messageField.value + "\n\n— " +
        nameField.value + (org ? "\n" + org : "") + "\nReply to: " + emailField.value;
      var href = "mailto:" + CONTACT_EMAIL + "?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      if (status) {
        status.textContent = "Opening your email app… the message is not sent until you press Send. If nothing opens, email " + CONTACT_EMAIL + " directly.";
      }
      window.location.href = href;
    });
  }
})();
