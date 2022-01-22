import ListElement from "./listElement.js";

const api = {
  url: "https://api.woses.de/spotifyRecent",
  getData() {
    return m.request({url: this.url})
  }
};

const Spotify = {
  data: undefined,
  apiData: undefined,

  async oninit({attrs ,state}) {
    state.data = attrs.data
    try {
      state.apiData = (await api.getData()).Data
    } catch (error) {
      console.log("fuck", error);
    }
  },
  view({state}) {
    return m(
      ListElement,
      { data: state.data },
      m("div.text", [
        state.apiData ? [
          state.apiData[0]["@attr"].nowplaying ? 
            m("p", "Now Playing:")
           :m("p", "Last Played:"),
          m("p", `Name: ${state.apiData[0].name}`),
          m("p", `Artist: ${state.apiData[0].artist["#text"]}`),
        ] : "Loading"
      ])
    );
  }
}

export default Spotify;
