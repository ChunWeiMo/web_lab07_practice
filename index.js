global_resp = undefined;

function btn_handler() {
    console.log("btn click")
    console.log(global_resp)
    $("h1").text(global_resp.data.movies[0].title)
}

function f_handler_to_handle_resp(resp) {
    global_resp = resp;
    load_movie_1(global_resp);
}


function load_movie_1() {
    console.log("load_movie_1 is called")

    title = global_resp.data.movies[0].title
    $("#movie_1").append(`<h1>${title}</h1>`)

    img = global_resp.data.movies[0].medium_cover_image
    img = `<img src="${img}" alt="">`
    $("#movie_1").append(img)

    url = global_resp.data.movies[0].url
    link = `<a href="${url}" target="_blank">Link to ${title}</a>`
    $("#movie_1").append(link)
}

function setup() {
    console.log("gogo")
    // $("button").click(btn_handler)
    $.ajax(
        {
            "type": "GET",
            "url": "https://yts.mx/api/v2/list_movies.json",
            success: f_handler_to_handle_resp,
        }
    )
}

$(document).ready(setup)