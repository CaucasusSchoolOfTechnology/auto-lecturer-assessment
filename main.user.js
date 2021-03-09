// ==UserScript==
// @name         CU Lecture Assessment
// @namespace    https://abgeo.dev/
// @version      1.0.0
// @description  Automatic Lecture Assessment for Caucasus University
// @author       Temuri Takalandze <me@abgeo.dev>
// @match        htt*://net.cu.edu.ge/assessment/*/*/*
// @grant        none
// @icon         https://programs.cu.edu.ge/cu/resources/images/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';

    /**
     * 1 - აბსოლუტურად ვეთანხმები;
     * 2 - ვეთახნმები;
     * 3 - მეტ ნაკლებად ვეთანხმები;
     * 4 - არ ვეთანხმები;
     * 5 - აბსოლუტურად არ ვეთანხმები;
     */
    const assessmentValue = '1'; // @todo: Set your value here.

    jQuery('input:radio[value="' + assessmentValue + '"]').attr('checked', true);
})();
