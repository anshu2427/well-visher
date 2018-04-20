$(document).ready(function(){
  $('.delete-social').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/admin/edit-social/'+id,
      success: function(response){
        alert('Deleting Social Image');
        window.location.href='/admin/edit-social';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
