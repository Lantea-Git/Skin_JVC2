// ==UserScript==
// @name         Clean_Pub_Risi_JVC
// @namespace    Clean_Pub_Risi_JVC
// @version      7.2.3
// @description  Vire les onglets secondaires dans risibank.
// @author       Atlantis
// @match        *://risibank.fr/embed*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7ea.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==


const style = document.createElement("style");
style.id = 'risiCleanCss';
style.textContent = `

    /* reduit marge en haut */
    .themed-container > .mt-4{margin-top: 0px !important }

    /* masque icone discord + le layout fav */
    /* .tabs.btn-group > a[href*="risibank.fr"], */
    .media-preview .card-body ~ *,
    .fa-discord {
        display: none !important;
    }

`;
document.head.append(style);
