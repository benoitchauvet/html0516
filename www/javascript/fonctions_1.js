function additionner(a,b)
{
  return a + b;
}

function somme()
{
  var result = 0;
  
  for (var i =0; i < arguments.length; i++)
    {
      if (! isNaN(arguments[i]))
      {
      result += Number(arguments[i]);
      }
    }
    return result;
}

var x = somme(1,45,5,"4",54,488,84,48,44);

console.log(x);