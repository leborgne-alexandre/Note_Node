$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var nom = button.data('name') 
  var firstname = button.data('firstname')
  var email = button.data('email')
  var modal = $(this)
  modal.find('.bind-last-name input').val(nom)
  modal.find('.bind-firstname input').val(firstname)
  modal.find('.bind-email input').val(email)
})
  

$('#add_member').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  })
  