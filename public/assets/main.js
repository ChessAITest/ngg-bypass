document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  window.location.assign(`/prox/?url=` + document.querySelector("input").value);
});
