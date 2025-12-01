document.querySelectorAll(".card").forEach((card) => {
    const glass = card.querySelector(".glass");

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const mx = ((e.clientX - rect.left) / rect.width) * 100 + "%";
        const my = ((e.clientY - rect.top) / rect.height) * 100 + "%";

        card.style.setProperty("--mx", mx);
        card.style.setProperty("--my", my);

        const rotateY = x * 20; // horizontal tilt
        const rotateX = -y * 20; // vertical tilt

        glass.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-5px) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        glass.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
