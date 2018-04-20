$(document).ready(function(){
  $('.delete-popular-video').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/admin/edit-popular-video/'+id,
      success: function(response){
        alert('Deleting Popular Video');
        window.location.href='/admin/edit-popular-video';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
