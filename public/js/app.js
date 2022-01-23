import Index from "./sites/index.js"
import Blog from "./sites/blog.js"
import Impressum from "./sites/impressum.js"

const root = document.querySelector("#app")

//m.route.prefix = ""
m.route(root, "/", {
    "/": Index,
    "/blog": Blog,
    "/impressum": Impressum
})