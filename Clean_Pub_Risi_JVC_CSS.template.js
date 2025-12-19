// ==UserScript==
// @name         Clean_Pub_Risi_JVC
// @namespace    Clean_Pub_Risi_JVC
// @version      {{VERSION_Clean_Pub_Risi_JVC_CSS}}
// @description  Vire les onglets secondaires dans risibank.
// @author       {{MASTER_AUTHOR}}
// @match        *://risibank.fr/embed*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7ea.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==


const style = document.createElement("style");
style.id = 'risiCleanCss';
style.textContent = `
/* IMPORT MASTER [[Clean_Pub_Risi_JVC_CSS]] */
`;
document.head.append(style);
