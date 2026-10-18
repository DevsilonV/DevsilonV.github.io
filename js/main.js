
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Actualizar automáticamente el año del copyright.
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Activar únicamente las redes sociales que tengan una URL.
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach((link) => {
        const url = link.dataset.url?.trim();

        if (!url) {
            return;
        }

        // Evitar esquemas de URL no deseados.
        let parsedUrl;

        try {
            parsedUrl = new URL(url, window.location.origin);
        } catch {
            return;
        }

        const allowedProtocols = ["https:", "http:", "mailto:"];

        if (!allowedProtocols.includes(parsedUrl.protocol)) {
            return;
        }

        link.href = url;
        link.removeAttribute("aria-disabled");

        if (parsedUrl.protocol !== "mailto:") {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });
});
