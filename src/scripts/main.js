'use strict';
const BigImage = document.querySelector('#largeImg');
const Thumbs = document.querySelector('thumbs');
Thumbs.addEventListener(click, (e) => 
const link = e.target.closest('a'));

if (!link) return

e.PreventDefault();

BigImage.src = link.href;
