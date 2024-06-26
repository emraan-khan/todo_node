const toggle_btn = document.querySelectorAll('.toggle_check');
const delete_btn = document.querySelector('#dlt_btn');

toggle_btn.forEach((btn,index)=>{
    btn.addEventListener('click', function () {
        console.log('document Clicked :',btn.id)
        toggleTask(btn.id);
    });
})

function toggleTask(id){

    fetch('/updateDoc',{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
    .then(res =>{
        if(res.ok){
            console.log('Doc updated Sucessfully')
        }
        else{
            console.log('Failed to update Doc'); 
        }
    })
    .catch(err =>{
        console.log("Error happend: ",err);
    })
};


delete_btn.addEventListener('click',function(){

    fetch('/deleteDoc', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(()=>{
        console.log('Deleted Sucessfully!!!')
        window.location.reload();
    })
    .catch((err)=>{
        console.log('Error in deleting!!!')
    })
});

