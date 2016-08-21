/* esversion: 6 */

$('#submitButton').click(function(e) {
  alert(1);
  firebase.database().ref('links').push({ title: $('#linkTitle').val(), url: $('#linkUrl').val() });
});
