const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      naves: [],
      planetas: [],
      especies: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getPersonajes: () => {
        //fetch("https://pokeapi.co/api/v2/pokemon/")
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ personajes: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getNaves: () => {
        fetch("https://swapi.dev/api/starships")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ naves: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getPlanetas: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ planetas: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getEspecies: () => {
        fetch("https://swapi.dev/api/species")
          .then((response) => response.json())
          .then((result) => {
            especies.log(result.results);
            setStore({ especies: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
