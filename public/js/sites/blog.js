const api = {
  url: "./data/blog.json",
  getData() {
    return m.request({ url: this.url });
  },
  getArticle(file) {
    return m.request({ url: `./static/blog/${file}`, responseType: "text" });
  },
};

function removeBackground() {
  document.querySelector("html").style.backgroundImage = "";
}

const Blog = {
  data: undefined,
  article: undefined,

  async oninit({ state }) {
    removeBackground()
    try {
      state.data = await api.getData();
    } catch (error) {
      console.log(error);
    }
  },
  view({ state }) {
    return m(
      "main.blog",
      state.data
        ? [
            m("div.blog-list", [
              m("h1", m(m.route.Link, {selector: "a", href: "/"} , "Woses")),
              m("ul", [state.data.map(({title, file}, i) => {
                return [
                  i != 0 ? m("hr") : "" ,
                  m("li", {
                    //this is gonna change when each article gets its own link
                    onclick: async () => {
                      state.article = await api.getArticle(file)
                    }
                  } ,title)
                ]
              })]),
            ]),
            m("article", state.article 
              ? m.trust(state.article)
              : "Wähle Artikel"
            )
          ]
        : "Lädt..."
    );
  },
};

export default Blog;
