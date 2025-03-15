document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            if (entry.target.classList.contains("area-2")) {
              // Adiciona um pequeno delay para area-2
              setTimeout(() => {
                entry.target.classList.add("area-visible");
              }, 500); // 300ms de delay
            } else {
              entry.target.classList.add("area-visible");
            }
            // transição reversa
            
            // fim area reversa
          } else {
            entry.target.classList.remove("area-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const areas = document.querySelectorAll(".area-1, .area-2");
    areas.forEach((area) => observer.observe(area));
});