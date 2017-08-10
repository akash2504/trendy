$(".button").click(function(){
    $.ajax({
        url: "/trends/search?attr_name=" + this.dataset.attr + "&attr_value=" + this.dataset.attr_value,
        type: "GET",
        success: function (result) {
            $('#searchresult').empty();
            for(i=0; i<result.length; i++){
                var div = document.createElement('div');
                var innerhtml = '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"> <div class="thumbnail jumbotron" style="padding-left:1%; margin-top:3%; padding-right:2%;"> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> <img src=' +  result[i]['media_url'] + ' style="width:100%; margin-left:0px;"> </div> <div class="col-md-6 col-md-6 col-sm-6 col-xs-6"> <div style="text-align:left; font-size:80%; word-wrap: break-word;"><b>' + result[i]['description'] +'</b></div> <div><p style="font-size:100%; text-align:justify; overflow-y:hidden; width:100%; word-wrap:break-word;" >....</p></div> </div> <button type="button" class="btn btn-primary">' + result[i]["domain"] +'</button> </div> <input id="app" type="hidden" name="Language" value="<%=@trends[i]["id"]%>"> </div> </div>';
                div.innerHTML = innerhtml;
                document.getElementById('searchresult').appendChild(div);
                
            }
            // $("#syncResponseHolder span.closebtn").show();
        }
    })
});