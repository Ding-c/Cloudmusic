
function sendComment1(){
    var comment = document.getElementById( "sendComment" ).value
console.log( comment )
    fetch( "http://localhost:3000/comment?t=1&type=2&" + location.search.slice(1) + "&content=" + comment, {
        method:"POST",
        mode:"cors",  
        credentials: "include"
    } )
    .then( function( data3 ){
        if( data3.status == 200 ){
            alert( "评论成功,可打开网页版查看" )
            console.log( "评论状态：" )
            console.log( data3 )
        }else{
            alert( "评论失败，请先登陆" )
        }
            
    } )
}
