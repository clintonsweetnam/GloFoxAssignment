'use strict';

const TARGET = process.env.npm_lifecycle_event;

let env = 'development';

if(TARGET === 'start')
  env = 'development'
else if(TARGET === 'build')
  env = 'prod';

module.exports = env;