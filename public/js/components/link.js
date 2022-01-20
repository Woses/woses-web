let Link = {
  oninit: function (vnode) {
    this.data = vnode.attrs.data;

    this.theme = "font-dark";
    if (this.data.font == "light") {
      this.theme = "font-light";
    }
  },
  view: function () {
    return m(
      "a.link.scale",
      {
        href: this.data.link,
        style: `background-color: ${this.data.color}; 
                background-image: ${this.data.background};`,
      },
      [
        m("img", { src: `./static/${this.data.logo}`, alt: this.data.logo }),
        m(`div.text.${this.theme}`, [
          m("h4", this.data.header),
          m("p", this.data.desc),
        ]),
      ]
    );
  },
};

export default Link;
