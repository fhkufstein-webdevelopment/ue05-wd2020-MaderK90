$(document).ready(function() {

    var userListBody = $('.userList tbody');
    var numberUser =0;

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();



        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }







        return false;
    });





    $('.addTrigger').click(function(){

        //1. get values

        var usereingabe = $("#username").val();

        //2. create a new element
        this.username = document.getElementById(username);
        //3. somehow add them to userListBody
        usereingabe.add().userListBody;

        //4. update number of current users
        numberUser ++;
        console.log(numberUser);

         //5. clear entries from the form

        $("#form")[0].reset();


    }

    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom

        $( "input[type=checkbox][name=löschen]:checked" ).val().remove();


        //2. update number of current users
        numberUser--;
        console.log(numberUser);







    });


    //maybe some code follows here

});