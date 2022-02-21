//make a api call and return data

async function makeAPICall(url) {
    try {
        let res = await fetch(url)
        let data = res.json()
        return data
        // console.log(data.articles)
    } catch (error) {
        console.log("er", error)
    }
}
function appendPictures(data, parent) {

    data.forEach((element) => {

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = element.image

        let content = document.createElement("p")
        content.innerHTML = element.content

        let description = document.createElement("p")
        description.innerHTML = element.description


        let Title = document.createElement("p")
        Title.innerHTML = element.title

        let source = document.createElement("p")
        source.innerHTML = element.source.name

        let url = document.createElement("p")
        url.innerHTML = element.url
        div.append(image, content, Title, source, description)
        parent.append(div)
        
    })
}
export { makeAPICall, appendPictures };