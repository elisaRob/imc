const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];
  
  // IMC = poids en kg / taille² en m
  
  //je récupère les inputs mais pas leur valeur"
  let resultatTailleCm=document.getElementsByClassName("resultatTailleCm")[0];
  let resultatTailleKg=document.getElementsByClassName("resultatTailleKg")[0];
  let boutonValidation=document.getElementsByClassName("boutonValidation")[0];
  let numeroImc=document.querySelector(".numeroImc");
  let resultatImc= document.querySelector(".resultatImc");

  
  
  //evènement click 
  boutonValidation.addEventListener("click",function(event)
  {
   
    //j'enlève le comportement par défaut du formulaire donc de le valider
    event.preventDefault();
  
    
    //si ce que met l'utilisateurt est faux la valeur espace vide est considérer comme false en Js
      if(!resultatTailleCm.value || !resultatTailleKg.value )
      {
        fonctionErreur();
        return;
        
      }
  
      
      //si ce que met l'utilisateur est infèrieur à zéro
      if(resultatTailleCm.value<=0 || resultatTailleKg.value<=0)
      {
        fonctionErreur2();
        return;
      }
  
      //on met une nouvelle expression régulière qui accepte les chiffres de 1 à 9 au moins jusqu'à 3 chiffres
      //si ç en matche pas avec l'exp on fait appel à la fonction
      let expressionReguliere=new RegExp("^[0-9]{1,3}$","g");
      if(expressionReguliere.test(resultatTailleCm.value)==false || expressionReguliere.test(resultatTailleKg.value==false))
      {
        fonctionErreur3();
        return;
      }
  
      
  
   //formule calcul imc
    let resultat=(resultatTailleKg.value)/((resultatTailleCm.value/100)**2);
  
  //je veux deux nombres après la virgule
    let resultatFinal=resultat.toFixed(2);
  
  
  
  //on fait appel à la fonction montrerResultat avec comme paramètres le résultatFinal
    montrerResultat(resultatFinal);
  
  
    }
    
  )
  

  function fonctionErreur()
  {
    numeroImc.textContent="Veuillez entrez votre taille et votre poids";
    
  }
  
  function fonctionErreur2()
  {
    numeroImc.innerHTML="<span>Veuillez rentrer un chiffre positif</span>";
  }
  
  function fonctionErreur3()
  {
    numeroImc.textContent="Veuillez marquez des chiffres valides";
  }
  
  function montrerResultat(resultatFinal)
  {
    //find va chercher dans le tableau d'objet 
      const chercherTableau=BMIData.find(element=>{
      if(resultatFinal>=element.range[0] && resultatFinal<=element.range[1])
      {
        return element;
      } 
      else if(typeof element.range==="number" && resultatFinal>=element.range)
      {
        return element;
      }
    })
      
    //cela permet de changer la valeur return du tableau d'objet
    resultatImc.innerHTML=chercherTableau.name;
    resultatImc.style.color=chercherTableau.color;
    document.getElementsByClassName('numeroImc')[0].innerHTML=resultatFinal;
  }