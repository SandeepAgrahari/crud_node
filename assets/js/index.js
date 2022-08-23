$('#add_user').submit(function(){
    alert('User added successfully!')
})

$('#update_user').submit(function(event){
    event.preventDefault()
    var unindexed_array = $(this).serializeArray();
    var data = {}
    unindexed_array.map(function(item, i){
        data[item['name']] = item['value']
    })
    
    var request = {
        'url':`http://localhost:5000/api/users/${data.id}`,
        'method':'PUT',
        'data':data
    }
    $.ajax(request).done(function(response){
        alert('Data Updated Successfully!')
    })
})


if(window.location.pathname == '/'){
    $ondelete = $('.table tbody td a.delete');
        $ondelete.click(function(){
            var id = $(this).attr("data-id")
            var request = {
                'url':`http://localhost:5000/api/users/${id}`,
                'method':'DELETE'
            }
            if(confirm('Do you want to delete this user info?')){
                $.ajax(request).done(function(response){
                    alert('User is deleted succssfully!')
                    location.reload()
                })
            }
        })
}