$(document).ready(function(){
  $('.delete-picture').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/admin/edit-picture/'+id,
      success: function(response){
        alert('Deleting Picture');
        window.location.href='/admin/edit-picture';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
