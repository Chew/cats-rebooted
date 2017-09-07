var i = 1;
if (localStorage['currentIndex'])
  i = localStorage['currentIndex'];
var cat = "http://www.iscalio.com/cats/" + i + ".jpg";
if (!localStorage['preloadedCat'] || localStorage['preloadedCat'] == "")
  document.getElementById("cat").src = cat
else
  document.getElementById("cat").src = localStorage['preloadedCat'];

localStorage['currentEntryAccessed'] = 1;
