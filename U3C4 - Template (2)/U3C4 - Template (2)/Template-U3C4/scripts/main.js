async function apiCall(url) {

try{
    let res = await fetch(url);
    let data = res.json()
    return data;

}catch (error){
    console.log("er",error)
}
    //add api call logic here
}


function appendArticles(articles, main) {
articles.forEach((element) => {
    
    let div = document.createElement("div")
    div.addEventListener("click",function() {
        var arr=[];
        arr.push(element);
        localStorage.setItem("article",JSON.stringify(arr))
        window.location.href="news.html"
    })
    let image=document.createElement("img")

    image.src=element.urlToImage

    let content = document.createElement("p")
    content.innerHTML=element.content
let title = document.createElement("p")
title.innerHTML=element.title
div.append(image,content,title)
main.append(div)

});
    //add append logic here

}

export { apiCall, appendArticles }