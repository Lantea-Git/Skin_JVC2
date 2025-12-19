// ==UserScript==
// @name         UI_2023_JVC_JS
// @namespace    UI_2023_JVC_JS
// @version      {{VERSION_No_Round_JVC_CSS}}
// @description  Enleve les border radius abusifs de la mise à jour à jour décembre 2023 (JVC) (JS).
// @author       {{MASTER_AUTHOR}}
// @match        *://www.jeuxvideo.com/*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7e7.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==

/* SKIN CSS : https://userstyles.world/style/17542/ */

const style = document.createElement("style");
style.textContent = `
/* IMPORT MASTER [[No_Round_JVC_CSS--Part1]] */

        /* IMPORT MASTER [[No_Round_JVC_CSS--Toogle1]] */

/* IMPORT MASTER [[No_Round_JVC_CSS--Part2]] */
`;
document.head.append(style);

