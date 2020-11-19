function Animal (_espece, _nom, _couleur, _nbPattes, _bVole) {
    
    // Propriétés
    var espece = _espece;
    var nom = _nom;
    var couleur = _couleur;
    var nbPattes = _nbPattes;
    var bVole = _bVole;
    
    // METHODES APPLICATIVES ----------------------
    this.dort = function() {
        return nom + " dort";
    }

    this.vole = function() {
        if(bVole) return nom + " est un/une "+ espece +" qui vole;"
        else return nom + " est un/une " + espece + " qui ne vole pas;"
    }

    
    // Impossible de changer de ESPECE
    this.setEspece = function(_espece) {
        if(!_espece) throw new Error("Entrez une espèce");
        espece = _espece;
    }

    // Impossible de changer de NOM
    this.setNom = function(_nom) {
        if(!_nom) throw new Error("Entrez un nom"); 
        nom = _nom;
    }

    // Impossible de changer de COULEUR
    this.setCouleur = function(_couleur) {
        if (!_couleur) throw new Error("Entrez une couleur");
        if (_couleur.length < 2) throw new Error("Entrez une couleur d'au moins 2 caractères");
        couleur = _couleur;
    }

    // Impossible de changer de NOMBRES DE PATTES
    this.setNbPattes = function(_nbPattes) {
        if(isNaN(_nbPattes) || !_nbPattes ) {
            nbPattes = 0;
        }
        else nbPattes = _nbPattes;
    }
    
    // Impossible de changer de BVOLE
    this.setBvole = function(_bVole){
        if(!_bVole) {
            bVole = false;
        }
        else bVole = true;
    }


    // ACCESSEURS ------------------------------
    this.getEspece = function(){ return espece; }
    this.getNom = function(){ return nom; }
    this.getCouleur = function(){ return couleur; }
    this.getNbPattes = function(){ return nbPattes; }
    this.getBvole = function(){return bVole;}

    

    //Contrôle Constructeur (après la création des setters !!!)
    this.setEspece(espece);
    this.setNom(nom);
    this.setCouleur(couleur);
    this.setNbPattes(nbPattes);
    this.setBvole(bVole);

    this.toString = function() {
        return nom + " est un/une de " + espece + " et a de couleur " 
                + couleur + " ( " + nbPattes + " pattes )";
    }
   
}