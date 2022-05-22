document.querySelector("form#create-list").onsubmit = (event) => {
  event.preventDefault();

  const value = document.querySelector("form#create-list input").value;

  if (value.trim() === "") {
    alert("value can`t be Empty!!");
    return;
  }
  // create card
  const card = document.createElement("div");
  card.classList.add("card");

  //   card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "position-relativ", "inpout-group");

  const headerChild = document.createElement("input");
  headerChild.attributes.setNamedItem("readonly");
  headerChild.innerHTML = 'value';

  const cardDelete = document.createElement("button");
  cardDelete.innerHTML = "X";
  cardDelete.classList.add("btn", "btn-outline-danger", "fw-bolder");



  //   card body
  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body", " text-wrap", "scroll", "scroll-area-sm");

  //   card footer
  const cardfooter = document.createElement("div");
  cardfooter.classList.add("card-header", "position-relativ", "input-group");

  const footerChild = document.createElement('input');
  footerChild.classList.add('form-control' , 'border-0');


//   ------------

  document.querySelector("#gride").appendChild(card);
    document.querySelector(".card").appendChild(cardHeader);
        document.getElementsByClassName(".card-header").appendChild(headerChild);
        document.getElementsByClassName(".card-header").appendChild(cardDelete);
        
    document.querySelector(".card").appendChild(cardbody);

    document.querySelector(".card").appendChild(cardfooter);

};
//   .classList.add('position-absolute' , 'top-0' , 'start-100' , 'translate-middle' , 'badge rounded-pill' , 'bg-danger');
//   .classList.add('card-text' , 'px-2' , 'my-2' , 'shadow' , 'bg-light' , 'position-relative');
