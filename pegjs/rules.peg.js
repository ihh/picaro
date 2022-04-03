// Cellular Automata grammar

Lines
  = _ head:Line _ '.' tail:Lines { return [head].concat(tail) }
  / _ Line _ '.' _

Line = Declaration / Map / Rule



Identifier
  = firstChar:[A-Za-z_] rest:[A-Za-z_0-9]* { return firstChar + rest.join("") }
  
_ "whitespace"
  = [ \t\n\r]*
