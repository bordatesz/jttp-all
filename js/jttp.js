$( document ).ready(function() {

    $('#jttp-logwork-time-start,#jttp-logwork-time-end').on('change',function() {
      
      var start_time = $('#jttp-logwork-time-start').val();
      var end_time = $('#jttp-logwork-time-end').val();

      //TODO: formatting, negative numbers, etc...
      var diff = ( new Date("1970-1-1 " + end_time) - new Date("1970-1-1 " + start_time) ) / 1000 / 60 / 60;

      $('#jttp-logwork-time-duration').val(diff);

    })

});

