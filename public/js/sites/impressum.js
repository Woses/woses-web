import Footer from "../components/footer.js";

function removeBackground() {
  document.querySelector("html").style.backgroundImage = "";
}

let Impressum = {
  oninit: function () {
    removeBackground();
  },
  view: function () {
    return m("main.impressum", [
      m("article", [
        m("h2.center", [m(m.route.Link, {selector: "a", href: "/"}, "Woses")]),
        m("p", "Die Webseite Woses.de wird zu Verfügung gestellt von:"),
        "Timo Mansfeld",
        m("br"),
        "--------------",
        m("br"),
        "--------------",
        m("p", "Mail: website[at]woses.de"),
        m(
          "p",
          "Bei Fragen oder anderen Beschwerden bitte über die E-Mail Kontakt aufnehmen."
        ),
        m("p", "BITTE NICHT!!! bei geistigen oder körperlichen Beschwerden."),
      ]),
      m(Footer),
    ]);
  },
};

export default Impressum;
