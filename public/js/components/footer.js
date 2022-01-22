const Footer = {
  font: "font-light",
  oninit({attrs, state}) {
    state.font = "font-light";
    if (attrs.font == "dark") {
      state.font = "font-dark";
    }
  },
  view({state}) {
    return m("footer", [
      m(m.route.Link, {
        selector: `a.${state.font}`,
        href: "/impressum"
      }, "Impressum"),
      m(`span.${state.font}`, "© 2022 Woses"),
    ]);
  },
};

export default Footer;
