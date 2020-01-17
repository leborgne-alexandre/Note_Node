$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var nom = button.data('name') 
  var firstname = button.data('firstname')
  console.log(firstname)
  var modal = $(this)
  modal.find('.modal-body input').val(nom)
  modal.find('.bind-name input').val(firstname)
  })
  