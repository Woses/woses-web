import Footer from "../components/footer.js";
import Link from "../components/link.js";
import Spotify from "../components/spotify.js";

let random;
function changeBackground(num) {
  document.querySelector(
    "html"
  ).style.backgroundImage = `url(./static/background/${num}.png)`;
}

const api = {
  url: "./data/links.json",
  getData() {
    return m.request({url: this.url})
  }
}

function links(link) {
  return m(Link, {data: link})
}

const Index = {
  data: undefined,
  random: random = Math.floor(Math.random() * 3 + 1),

  async oninit({state}) {
    changeBackground(state.random)

    state.data = await api.getData()
  },
  view({state}) {
    return m("main.index", [
      m("article", [
        m("div.logo.scale", [m("h2", "Woses")]),
        state.data ?  [
          m(Spotify, {data: state.data.spotify}),
          state.data.links.map(links)
        ] : "Waiting for data",
      ]),
      m(Footer, { font: "dark" }),
    ]);
  }
}

export default Index;
