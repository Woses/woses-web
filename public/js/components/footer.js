let Footer = {
  oninit: function (vnode) {
    this.font = "font-light";
    if (vnode.attrs.font == "dark") {
      this.font = "font-dark";
    }
  },
  view: function () {
    return m("footer", [
      m(`a.${this.font}`, { href: "/impressum" }, "Impressum"),
      m(`span.${this.font}`, "© 2022 Woses"),
    ]);
  },
};

export default Footer;
