export const adatLeiras = {

    vezetekNev: {
        megjelenes: "vezeték név",
        tipus: "text",
        placeholder: "valaki",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie",
        requiered: true,
    },

    keresztnev: {
        megjelenes: "kereszt név",
        tipus: "text",
        placeholder: "vagyok",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie",
        requiered: true,
    },

    
    szul: {
        megjelenes: "Szűletési dátum",
        tipus: "date",
        placeholder: "2000-01-01",
        value: "2000-01-01",
        pattern: { min: "1000-01-01", max: new Date()  },
        requiered: true,
    }




}