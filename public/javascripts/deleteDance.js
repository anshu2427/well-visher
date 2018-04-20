$(document).ready(function(){
  $('.delete-dance').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/admin/edit-dance/'+id,
      success: function(response){
        alert('Deleting Dance Video');
        window.location.href='/admin/edit-dance';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
