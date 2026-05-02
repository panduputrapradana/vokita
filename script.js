      // Scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
          });
        },
        { threshold: 0.1 },
      );
      document
        .querySelectorAll(".fade-up")
        .forEach((el) => observer.observe(el));

      // FAQ toggle
      function toggleFaq(el) {
        const item = el.parentElement;
        const isOpen = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      }

      // Hamburger (basic)
      function toggleMenu() {
        const links = document.querySelector(".nav-links");
        if (links)
          links.style.display =
            links.style.display === "flex" ? "none" : "flex";
      }

      // Navbar scroll effect
      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        nav.style.background =
          window.scrollY > 60 ? "rgba(15,23,42,0.97)" : "rgba(15,23,42,0.85)";
      });