    //my cod started here
    let lists = localStorage.getItem('lists');
    if (lists === null){
        lists = [];
    }else{
        lists = JSON.parse(lists);
    }
    createList(lists);

document.querySelector("form#FL").onsubmit = (event) =>{
    event.preventDefault();
    const listTitle = document.getElementById('demo').value;

    if (listTitle.trim() === ''){
        alert("عنوان نمی تواند خالی باشد");
        return;
    }
    let title = listTitle;
    const id = ( Math.random() + 1 ).toString(36).substring(7);
    let data = {title, id};
    lists.push(data);
    sync();
    // createList(data);
}
function deleteList() {
    const deleteListBTNs = document.querySelectorAll(".deleteList");
    const btnDelete = [...deleteListBTNs];
    btnDelete.forEach((btn) => {
        const id = btn.dataset.id;

        btn.addEventListener("click", (event)=>{
            let deleteItemList = event.target.dataset.id;
            localStorage.removeItem(deleteItemList);
        });
    });
}

function sync(){
    localStorage.setItem('lists',JSON.stringify(lists));
}

function createList(lists){
    if (lists !== null || lists !== ""){
        lists.forEach((list)=>{

            list +=`<div class="card shadow-1-strong m-3 p-2 pb-0">
                        <div class="card-header d-flex justify-content-between ps-1 pe-0 pb-3 border-0">
                          <p class="mb-0"><strong>${list.title}</strong></p>
                              <button
                                      class="deleteList btn btn-link text-reaset m-0 py-0 px-2"
                                      data-mdb-ripple-color="dark" 
                                      data-id="544"
                                      title="حذف لیست" 
                                      onclick="deleteList()">
                                      <i class="fas fa-trash" data-id="${list.id}"></i>
                              </button>
                        </div>
                
                        <div class="overflow-auto scrollbar-primary" style="max-height: 60vh;">
                          <div class="visibleEditIcon card-body rounded bg-white shadow-2 mb-2 position-relative">item 1
                            <button class="trash-icon btn btn-floating" title="حذف کارت"><i class="fas fa-trash"></i></button>
                          </div>
                        </div>
                        <div class="card-footer input-group">
                          <input type="text" class="form-control" placeholder="add another card" />
                          <button class="btn btn-primary m-0 py-0 px-3" data-mdb-ripple-color="dark">
                            <i class="fas fa-plus fa-lg"></i>
                          </button>
                        </div>
                      </div>`
            const section = document.querySelector("#section");
            section.insertAdjacentHTML("beforeend", list) ;
        });
    }
}