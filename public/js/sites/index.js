import Footer from "../components/footer.js";
import Link from "../components/link.js";

let random;
function changeBackground() {
  if (!random) {
    random = Math.floor(Math.random() * 3 + 1);
  }
  document.querySelector(
    "html"
  ).style.backgroundImage = `url(./static/background/${random}.png)`;
}

let Index = {
  oninit: async function () {
    changeBackground();

    m.request({
      method: "GET",
      url: "./data/links.json",
    }).then((data) => {
      this.links = data.map((el) => {
        return m(Link, { data: el });
      });
    });
  },
  view: function () {
    return m("main.index", [
      m("article", [
        m("div.logo.scale", [m("h2", "Woses")]),
        this.links ? m("div", this.links) : m("div", "Waiting for data"),
      ]),
      m(Footer, { font: "dark" }),
    ]);
  },
};

export default Index;
