let add =document.querySelector("#add")
let saved = document.querySelector("#saved");
let vac= document.querySelector("#vac")
let input = document.querySelector("input");

function ajouter(event){
  event.preventDefault()
    saved.innerHTML += `<li class="item">  ${input.value}     <button class="vacciné" data-value="${input.value}"> vacciné</button>  </li>`;
    let vacbtn = document.querySelectorAll(".vacciné");
    for (let i = 0; i < vacbtn.length; i++) {
      vacbtn[i].addEventListener("click", Vaccine);
    }
    input.value=""

  }

add.addEventListener("click",ajouter)
function Vaccine(event){
  let parentLi = event.target.parentNode;
  vac.innerHTML += `<li class="item">  ${event.target.getAttribute("data-value")}     <button class="delete"> delete</button>  </li>`;
  parentLi.remove();
  let del = document.querySelectorAll(".delete");
  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", deleteVac);
  }
}
function deleteVac(event) {
  let parentLi = event.target.parentNode;
  parentLi.remove();
}
