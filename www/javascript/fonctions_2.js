// opérations :

var additionner = function(a,b)
                 {
                   return a+b;
                 };

function soustraire(a,b)
{
  return a - b;
}

// utilisation :

calculer(31,11, additionner);
calculer(45,3, soustraire);

calculer(157984, 66798, function(x,y){
    return x/y;
});

// fonction "générique" :

function calculer(a, b, operation)
{
  console.log("Opérandes : " + a + ", " + b);
  console.log("Résultat : " + operation(a,b));
}


