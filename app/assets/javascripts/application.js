// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function(){



    $(".show").click(function(e){
        var id = $(this).parent().attr('id');
//        alert(id);
        $.ajax({
            url: '/posts/'+id+'/post_show',
            type: "GET",
            success: function(){
                box();
            }
        });
    });

    $(".edit").click(function(e){
        var id = $(this).parent().attr('id');
        alert(id);
//        $.ajax({
//            url: '/posts/'+ id + '/post_add_comment.js',
//            type: "POST",
//            data: {text :comment},
//            success: function (data) {
//
//                //alert(data);
//            }
//        });
    });

    $(".delete").click(function(e){
        var id = $(this).parent().attr('id');
        alert(id);
//        $.ajax({
//            url: '/posts/'+ id + '/post_add_comment.js',
//            type: "POST",
//            data: {text :comment},
//            success: function (data) {
//
//                //alert(data);
//            }
//        });

    });

    $("#add-post").click(function(e){
        $.ajax({
            url: '/posts/post_new',
            type: "GET",
            success: function(){
                box();
            }
        });

    });

    function box()
    {
        $("#myModal").modal({
            "backdrop"  : "static",
            "keyboard"  : true,
            "show"      : true    // this parameter ensures the modal is shown immediately
        });

        $("#myModal").bind("show", function() {
            $("#myModal a.close").click(function(e) {
                $("#myModal").modal('hide');
            });
        });

        $("#myModal").bind("hide", function() {
            $("#myModal a.close").unbind();
        });
    }




})
