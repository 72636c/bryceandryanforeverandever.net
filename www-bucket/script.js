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
  'Okta',
  'rubber domes',
  'tri-state Booleans'
];

document.getElementById('trigger').innerHTML =
  triggers[Math.floor(Math.random() * triggers.length)];
