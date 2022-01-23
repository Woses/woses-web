const api = {
  url: "./data/blog.json",
  getData() {
    return m.request({ url: this.url });
  },
  getArticle(file) {
    return m.request({ url: `./static/blog/${file}`, responseType: "text" });
  },
};

const Blog = {
  data: undefined,
  articles: [],

  async oninit({ state }) {
    try {
      state.data = await api.getData();

      state.data.forEach(async (article) => {
        state.articles.push(await api.getArticle(article.file));
      });
    } catch (error) {
      console.log(error);
    }
  },
  view({ state }) {
    return state.articles[0] ? m.trust(state.articles[0]) : "Loading";
  },
};

export default Blog;
