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
    selected: "",
    description: "",
    screenshotFile: "",
    recommend: "",
    satisfied: "",
    outcome: "",
    service: "",
    time: ""
  },
  methods: {
    submitFeedback: function(){
      alert("Feedback Details: \n Name: " + this.name + "\n Email: " + this.email + "\n Feedback Type: " + this.feedbackType + "\n You Like: " + this.likes + "\n Satisfaction: " + this.selected + "\n Recommend: " + this.recommend + "\n Satisfied: " + this.satisfied + "\n Outcome: " + this.outcome + "\n service: " + this.service + "\n Time: " + this.time + "\n Description: " + this.description);
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

Vue.directive("select", {
    "twoWay": true,

    "bind": function () {
        $(this.el).material_select();

        var self = this;

        $(this.el).on('change', function() {
            self.set($(self.el).val());
        });
    },

    update: function (newValue, oldValue) {
        $(this.el).val(newValue);
    },

    "unbind": function () {
        $(this.el).material_select('destroy');
    }
});