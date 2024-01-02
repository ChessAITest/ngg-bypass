document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  window.location.assign(`/prox/?url=` + btoa(document.querySelector("input").value));
});
