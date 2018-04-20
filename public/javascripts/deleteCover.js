$(document).ready(function(){
  $('.delete-cover').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/admin/edit-cover/'+id,
      success: function(response){
        alert('Deleting Cover Video');
        window.location.href='/admin/edit-cover';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
