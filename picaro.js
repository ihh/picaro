const Getopt = require('node-getopt');
const fs = require('fs');

const opt = Getopt.create([
  ['r' , 'rules=FILE'   , 'specify JSON rules file'],
  ['b' , 'board=FILE'   , 'specify JSON board file'],
  ['t' , 'time=INT'     , 'specify simulation time'],
  ['v' , 'verbose'      , 'print debugging info']
  ['h' , 'help'         , 'display this help'],
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line

let rulesJson = JSON.parse (fs.readFileSync (opt.options.rules).toString());
let boardJson = JSON.parse (fs.readFileSync (opt.options.board).toString());
