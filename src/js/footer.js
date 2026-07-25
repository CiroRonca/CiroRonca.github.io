// Footer condiviso — iniettato via <script src>, funziona sia su file:// che su http(s)://
(function () {
    function injectFooter() {
        var placeholder = document.getElementById('footer-placeholder');
        if (!placeholder) return;

        placeholder.innerHTML = `
<footer>
    <p>© 2025 Ciro Ronca &nbsp;·&nbsp; Rome, Italy &nbsp;·&nbsp; Computer Engineer</p>
    <p style="margin-top: 10px;">
    <a href="mailto:roncaciro7@gmail.com" style="color: var(--gold); text-decoration: none; opacity: 0.75; transition: opacity 0.2s;"
       onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.75'">
        roncaciro7@gmail.com
    </a>
</p>
    <p style="margin-top: 8px; opacity: 0.5;">Last updated: <span id="last-updated"></span></p>
</footer>`;

        // usa la lingua della pagina (<html lang="...">) per formattare la data correttamente
        var lang = document.documentElement.lang || 'it';
        var locale = lang.toLowerCase().startsWith('en') ? 'en-GB' : 'it-IT';
        var lastUpdated = document.getElementById('last-updated');
        if (lastUpdated) {
            var d = new Date();
            lastUpdated.textContent = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();