//CREER UN TABLEAU D OBJET DE 5 UTILISATEURS
let users = [
    { nom: "bousso", prenom: "tayba", age: 14, role: "admin", statut: "actif" },
    { nom: "diallo", prenom: "abdou", age: 25, role: "user", statut: "inactif" },
    { nom: "fall", prenom: "astou", age: 33, role: "user", statut: "actif" },
    { nom: "sow", prenom: "moussa", age: 18, role: "admin", statut: "actif" },
    { nom: "ba", prenom: "fallou", age: 20, role: "admin", statut: "inactif" }
];
console.log(users);



//CREER UN NOUVEAU TABLEAU  CONTENANT DES OBJETS SIMPLIFIES :PRENOM ROLE (MAP ET LA DESTRUCTURATION)

const usersSimplifies = users.map(({ prenom, role }) => {
    return { prenom, role };
});
console.log(usersSimplifies);
//map cree un nouveau tableau a partir d un tableau existant



//TRANFORMER LE TABLEAU POUR OBTENIR UN SEUL OBJET DONT LES CLES CORRESPONDENT AU ROLE ET LES VALEURS SONT DES TABLEAUX CONTENANT LES UTILISATEURS ASSOCIES

const usersselonrole = users.reduce((groupe, u) => { 
    if (!groupe[u.role]) {
        groupe[u.role] = [];
    }

    groupe[u.role].push(u);

    return groupe;
},{});
console.log(usersselonrole);
/*
reduce permet d automatiser au lieu d ajouter les utilisateurs un a un
  if (!new[u.role]) {
        new[u.role] = []; ce code permet de creer un tableau vide pour chaque role si il n existe pas encore dans le nouvel objet new
*/



// CREER UNE FONCTION QUI AFFICHE LE PREMIER UTILISATEUR AGE DE 25 ANS EN UTILISANT FIND //
function getUserAge25() {
    const user = users.find((u) => u.age == 25);
console.log(user);
}
getUserAge25();



// AJOUTER UN NOUVEL UTILISATEUR DANS UN NOUVEAU TABLEAU APPELE EQUIPE QUI CONTIENT LES UTILISATEURS DU PREMIERTABLEAU EN  UTILISANT  LES SPREAD OPERATOR

const equipe = [
    ...users, { nom: "traore", prenom: "codou", age: 30, role: "user", statut: "actif" }];
    console.log(equipe);

    /*le spread operator . . .users permet de copier tous les utilisateurs du tableau users dans le nouveau tableau equipe, puis on ajoute un nouvel utilisateur à la fin du tableau equipe.*/