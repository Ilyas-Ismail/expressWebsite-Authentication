if(getTitle == "Business Contacts List"){
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for(button of deleteButtons){
        button.addEventListener('click', (event)=>{
            if (!confirm("Are you sure?")){
                event.preventDefault();
            }
        });
    }
}