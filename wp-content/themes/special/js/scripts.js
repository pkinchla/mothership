!function(){function e(t,n,a){function o(r,s){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return o(t[r][1][e]||e)},u,u.exports,e,t,n,a)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}return e}()({1:[function(e,t,n){!function(e){function t(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function n(e,n){e.classList?e.classList.add(n):t(e,n)||(e.className+=" "+n)}function a(e,n){if(e.classList)e.classList.remove(n);else if(t(e,n)){var a=new RegExp("(\\s|^)"+n+"(\\s|$)");e.className=e.className.replace(a," ")}}function o(t,n){var a,o=window.pageYOffset,i=t.offsetTop,r=i-o,s=r/(n/16),c=function(){window.scrollBy(0,s),a()};a=s>=0?function(){var t=window.pageYOffset;(t>=i-s||window.innerHeight+t>=e.body.offsetHeight)&&clearInterval(l)}:function(){window.pageYOffset<=(i||0)&&clearInterval(l)};var l=setInterval(c,16)}function i(t){var i=(e.querySelectorAll(".js-pagination"),e.querySelector(".js-pagination-target")),r=e.querySelector(".js-pagination-element"),s=e.querySelector(".js-pagination-block");n(r,"removing"),n(s,"removing-pagination"),n(i,"loading"),a(r,"adding"),a(s,"adding-pagination"),fetch(t).then(function(e){return e.text()}).then(function(t){o(i,250);var c=e.createElement("div");c.innerHTML=t;var l=c.querySelector(".js-pagination-element"),u=c.querySelector(".js-pagination-block");n(l,"adding"),n(u,"adding-pagination"),a(i,"loading"),i.removeChild(r),i.removeChild(s),i.appendChild(l),i.appendChild(u)})}var r=e.getElementById("pagination-block");r&&self.fetch&&r.addEventListener("click",function(e){e.target.matches(".js-pagination")&&(e.stopPropagation(),e.preventDefault(),i(e.target.href))});var s=e.querySelector(".main-nav-toggle"),c=e.querySelector("#primary-menu"),l=e.querySelector(".label"),u=function(){this.classList.toggle("close-state"),c.classList.toggle("open"),t(this,"close-state")?l.textContent="Close":l.textContent="Menu"};s.addEventListener("click",u,!1);var f="localhost"===window.location.hostname;"serviceWorker"in navigator&&!f&&navigator.serviceWorker.register("/sw.js").then(function(){return navigator.serviceWorker.ready}).then(function(e){});var g=e.querySelectorAll("a"),d=e.querySelector(".js"),v=e.querySelector(".logged-in");if(window.onpageshow=function(e){e.persisted&&window.location.reload()},!v)for(var p=0;p<g.length;p++){var h=t(g[p],"js-pagination");location.hostname!==g[p].hostname&&g[p].hostname.length||g[p].href.match("#")||g[p].href.match("mailto")||h||g[p].addEventListener("click",function(e){var t=this;e.preventDefault(),n(d,"exit"),setTimeout(function(){window.location=t},350)})}!function(){var t=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,n=navigator.userAgent.toLowerCase().indexOf("opera")>-1,a=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(t||n||a)&&e.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,n=location.hash.substring(1);/^[A-z0-9_-]+$/.test(n)&&(t=e.getElementById(n))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)}()}(document)},{}]},{},[1]);