import { adatLeiras } from "../model/adatLeiro.js";


export default function FoUrlap(){
    const adat = {};
    function adatKuld(event){
        event.preventDefault();
        
    }
    function adatValt(event){
        console.log(event.target)

    }


    return(
        <form onSubmit={adatKuld}>
            <div className="mb-3 mt3">
        <label for={adatLeiras.vezetekNev}>{adatLeiras.vezetekNev.megjelenes}:</label>
        <input type={adatLeiras.vezetekNev.tipus} id="nev" name="nev" placeholder={adatLeiras.vezetekNev.placeholder} onChange={adatValt} />
       
        </div>
      </form> 
    );


};