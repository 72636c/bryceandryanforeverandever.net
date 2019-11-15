'use strict';

const triggers = [
  '/kæɪʃ/',
  '/niːʃ/',
  '💩',
  'butterfly switches',
  'Docker',
  'hello, world',
  'Imperial units',
  'Jive search',
  "Merge branch 'master' into branch",
  'Okta',
  'rubber domes',
  'tri-state Booleans',
  'gates in edh',
  'burgers',
  '9 letter puzzles',
  'proxy cards',
  'items in smash',
  'being thumbsd down',
  '541',
  '🦍 warfare',
  'being emailed about the hub',
  'sausage sizzle',
  'multipart emojis',
  'snapchat',
];

document.getElementById('trigger').innerHTML =
  triggers[Math.floor(Math.random() * triggers.length)];
