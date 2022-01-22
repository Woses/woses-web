import ListElement from "./listElement.js";

/* function Link(initialVnode) {
  let data = initialVnode.attrs.data

  return {
    view: () => {
      return m(ListElement, {
        data: data,
      },
      m("div.text", [
        m("h4", data.header),
        m("p", data.desc),
      ]));
    },
  }
} */

const Link = {
  data: undefined,

  oninit({attrs, state}) {
    state.data = attrs.data
  },
  view({state}) {
    return m(ListElement, {
      data: state.data,
    },
    m("div.text", [
      m("h4", state.data.header),
      m("p", state.data.desc),
    ]));
  }
}


export default Link;
