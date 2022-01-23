import ListElement from "./listElement.js";

const api = {
  url: "https://api.woses.de/spotifyRecent",
  getData() {
    return m.request({ url: this.url });
  },
};

const Spotify = {
  data: undefined,
  apiData: undefined,
  error: false,

  async oninit({ attrs, state }) {
    state.data = attrs.data;
    try {
      state.apiData = (await api.getData()).Data;
      state.data.link = state.apiData[0].url;
    } catch (error) {
      console.log("Spotify: ", error);
      state.error = true;
    }

    setInterval(async () => {
      try {
        state.apiData = (await api.getData()).Data;
        state.data.link = state.apiData[0].url;
      } catch (error) {
        console.log("Spotify: ", error);
        state.error = true;
      }
    }, 60000);
  },
  view({ state }) {
    return m(
      ListElement,
      { data: state.data },
      state.apiData
        ? [
            m("div.text",
            [
              m("div", [
                state.apiData[0]["@attr"].nowplaying
                  ? m("p", "Hört gerade:")
                  : m("p", "Zuletzt gehört:"),
                m(
                  "p",
                  `${state.apiData[0].artist["#text"]} - ${state.apiData[0].name}`
                ),
              ]),
            ]),
            m("img.spotify", {
              src: state.apiData[0].image[2]["#text"],
              alt: state.apiData[0].image[2]["#text"],
            }),
          ]
        : state.error
        ? m("div.text", "Fehler")
        : m("div.text", "Lädt...")
    );
  },
};

export default Spotify;
