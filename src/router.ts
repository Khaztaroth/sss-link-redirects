export async function routeRequest(request: Request) {
    const url = new URL(request.url);
    const path = url.pathname.split("/").slice(1);
    const normalizedPath = path[0].toUpperCase()

    switch (normalizedPath) {
        case "DRAZSOLSLORE":
            return Response.redirect("https://docs.google.com/document/d/1uUr5ODdvwRQuPjZApg6kgSoqZaUjPT0t83A8HLQwOJ0/edit#heading=h.58rejhp4l3e4")
        case "STARTRUCKER":
            return Response.redirect("https://store.steampowered.com/app/2380050/Star_Trucker/?utm_source=SSS&utm_content=Launch")
        default: 
            return Response.redirect("https://www.twitch.tv/secretsleepoversociety")
    }
}