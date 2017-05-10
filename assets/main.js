$(document).ready(function() {
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 15
  });
  $.validator.setDefaults({
    ignore: []
  });
  $("form").validate({
    submitHandler: function(form) {
      console.log(form);
      return;
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });

});


new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    feedbackType: "",
    likes: [],
    description: "",
    screenshotFile: ""
  },
  methods: {
    submitFeedback: function(){
      alert("Feedback Details: \n Name: " + this.name + "\n Email: " + this.email + "\n Feedback Type: " + this.feedbackType + "\n You Like: " + this.likes + "\n Description: " + this.description );
      // + "\n File Name: " + this.screenshotFile
    },

    resetForm: function(){
      this.name = "";
      this.email = "";
      this.feedbackType = "";
      this.likes = [];
      this.description = "";
      this.screenshotFile = "";
    }
  }
});

Vue.component('my-comp',{
  
});