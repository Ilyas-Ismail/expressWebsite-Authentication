// File name: delete.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

// creating a warning prompt when deleting.

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