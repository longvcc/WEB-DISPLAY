function morePosts(listPostMore){

    
    var listPostCurrent = document.getElementsByClassName("box-stream");
    listPostMore = listPostCurrent;
    var lastEle =  listPostCurrent[listPostCurrent.length - 1];

    lastEle.parentNode.insertBefore(listPostMore ,lastEle.nextElementSibling);
    console.log(listPostCurrent);
}