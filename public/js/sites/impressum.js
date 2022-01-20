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
        m("h2.center", [m("a", { href: "/" }, "Woses")]),
        m("p", "Die Webseite Woses.de wird zu Verfügung gestellt von:"),
        "T---- M----",
        m("br"),
        "--------------",
        m("br"),
        "--------------",
        m("p", "Mail: ----.----[at]---.--"),
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
