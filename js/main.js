// The Den — page behavior
// 1. FAQ accordion (one answer open at a time)
// 2. Tour form validation + confirmation
// 3. Footer year

(function () {
  "use strict";

  // ---------- FAQ accordion ----------
  const accordion = document.querySelector("[data-accordion]");
  if (accordion) {
    const triggers = accordion.querySelectorAll(".acc-trigger");

    const setOpen = (trigger, open) => {
      trigger.setAttribute("aria-expanded", String(open));
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (panel) panel.hidden = !open;
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const isOpen = trigger.getAttribute("aria-expanded") === "true";
        triggers.forEach((t) => setOpen(t, false));
        setOpen(trigger, !isOpen);
      });
    });
  }

  // ---------- Tour form ----------
  const form = document.getElementById("tour-form");
  const success = document.getElementById("form-success");
  const errorMsg = document.getElementById("form-error");

  if (form && success) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = form.elements.name;
      const phone = form.elements.phone;
      const missing = [name, phone].filter((field) => !field.value.trim());

      [name, phone].forEach((field) => field.removeAttribute("aria-invalid"));

      if (missing.length) {
        missing.forEach((field) => field.setAttribute("aria-invalid", "true"));
        errorMsg.hidden = false;
        missing[0].focus();
        return;
      }
      errorMsg.hidden = true;

      // ---- Hook up a real backend here ----
      // Example with Formspree (https://formspree.io):
      //   1. Set the form's action to your Formspree URL in index.html
      //   2. Uncomment the block below
      //
      // try {
      //   const res = await fetch(form.action, {
      //     method: "POST",
      //     body: new FormData(form),
      //     headers: { Accept: "application/json" },
      //   });
      //   if (!res.ok) throw new Error("Request failed");
      // } catch (err) {
      //   errorMsg.textContent = "That didn’t go through. Call or text us instead and we’ll set up a time.";
      //   errorMsg.hidden = false;
      //   return;
      // }

      form.hidden = true;
      success.hidden = false;
      success.setAttribute("tabindex", "-1");
      success.focus();
    });
  }

  // ---------- Footer year ----------
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
