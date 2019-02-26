'use strict';

const triggers = [
  '/kæɪʃ/',
  '/niːʃ/',
  'butterfly switches',
  'Docker',
  'hello, world',
  'Imperial units',
  'Jive search',
  "Merge branch 'master' into branch",
  'rubber domes',
];

document.getElementById('trigger').innerHTML =
  triggers[Math.floor(Math.random() * triggers.length)];
