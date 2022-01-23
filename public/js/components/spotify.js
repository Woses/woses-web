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
      state.apiData = await api.getData()
    } catch (error) {
      console.log("Spotify: ", error);
      state.apiData.error = true
    }

    setInterval(() => {
      try {
        state.apiData = await api.getData()
      } catch (error) {
        console.log("Spotify: ", error);
        state.apiData.error = true
      }
    }, 60000)
  },
  view({state}) {
    return m(
      ListElement,
      { data: state.data },
      m("div.text", [
        state.apiData.Data ? [
          state.apiData.Data[0]["@attr"].nowplaying ? 
            m("p", "Hört gerade:")
           :m("p", "Zuletzt gehört:"),
          m("p", `${state.apiData.Data[0].artist["#text"]} - ${state.apiData.Data[0].name}`),
        ] : state.apiData.error ? "Fehler" : "Lädt..."
      ])
    );
  }
}

export default Spotify;
