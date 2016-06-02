'use strict';

// lecture
var monArticle = document.getElementById('art42');

var enfants = monArticle.children;

for (var i = 0; i < enfants.length; i++)
  {
    console.log(enfants[i]);
  }

// modification :
var mesTitres = document.querySelectorAll('article:nth-child(even) h2');

for (var i = 0; i < mesTitres.length; i++)
  {
    var titre = mesTitres[i];
    
    titre.style.backgroundColor = 'yellow';
    titre.setAttribute('id', 'titre' + i);
    titre.classList.toggle('surligne');
  }

// création :
var image = document.createElement('img');

image.setAttribute('src', 'http://i.eurosport.com/2016/06/01/1867195-39340893-2560-1440.jpg');
image.setAttribute('alt', 'richie');

image.style.width = '100px';

var p = document.createElement('p');
p.innerHTML = 'Ahlalalala quelle déception pour le français !!';

var art = document.createElement('article');

art.appendChild(image);
art.appendChild(p);

var body = document.querySelector('body');

body.appendChild(art);


// suppression
var articlesASupprimer = document.querySelectorAll('body > article');

for (var i = 0; i < articlesASupprimer.length; i++)
  {
    body.removeChild(articlesASupprimer[i]);    
  }

// rechargement de la page :

document.location.reload();


//body.innerHTML = '';








