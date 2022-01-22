const ListElement = {
  data: undefined,
  theme: "font-dark",

  oninit({attrs, state}) {
    state.data = attrs.data

    if (state.data.font == "light") {
      state.theme = "font-light";
    }
  },
  view({state, children}) {
    return m(
      `a.link.scale.${state.theme}`,
      {
        href: state.data.link,
        style: `background-color: ${state.data.color}; 
                background-image: ${state.data.background};`,
      },
      [
        m("img", { src: `./static/${state.data.logo}`, alt: state.data.logo }),
        children,
      ]
    );
  }
}

export default ListElement;
