var tab = new Object;

tab['paris'] = 'psg';
tab['marseille'] = 'om';
tab['lyon'] = 'ol';

console.log(tab);

console.log(Object.getOwnPropertyNames(tab));

for(var club in tab)
  {
    console.log(club);
  }