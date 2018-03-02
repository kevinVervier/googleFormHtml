var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby7IJigwmpzMnw8801h9KKSdUrwMbKSdwfvnKNVNM_KbcpT9UVR/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
