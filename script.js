const teamCard = [
    {
        'image':'img/wayne-barnett-founder-ceo.jpg',
        'name':'Wayne Barnet',
        'role':'Founder & CEO',
    },
    {
        'image':'img/angela-caroll-chief-editor.jpg',
        'name':'Angela Caroll',
        'role':'Chief Editor',
    },
    {
        'image':'img/walter-gordon-office-manager.jpg',
        'name':'Walter Gordon',
        'role':'Office Manager',
    },
    {
        'image':'img/angela-lopez-social-media-manager.jpg',
        'name':'Angela Lopez',
        'role':'Social Media Manager',
    },
    {
        'image':'img/scott-estrada-developer.jpg',
        'name':'Scott Estrada',
        'role':'Developer',
    },
    {
        'image':'img/barbara-ramos-graphic-designer.jpg',
        'name':'Barbara Ramos',
        'role':'Office Manager',
    },
   
];

// All'evento click del pulsante add..
const newCard = document.getElementById('addMemberButton');

newCard.addEventListener('click', function(){
    const newName = document.getElementById('name').value;
    const newRole = document.getElementById('role').value;
    const newImage = document.getElementById('image').value;

    // Se uno dei campi è vuoto lancia un alert ...
    if (newName == '' || newRole == '' || newImage == ''){
        alert('The fields NAME - ROLE - IMAGE are required')
    }
    // Altrimenti crea la nuova card
    else{
        const newClass = {
            'image': newImage,
            'name': newName,
            'role': newRole,
        }
    
        // Creo la nuova classe
        createCard(newClass.image, newClass.name,newClass.role, position);
        
        //Svuoto i campi
        document.getElementById('name').value = '';
        document.getElementById('role').value = '';
        document.getElementById('image').value = '';
    }
});

// Questa variabile serrve per il posityionamento delle Card in Html
const position = 'team-container'

// Questo ciclo popola il container di card
for( let i = 0; i < teamCard.length; i++){
    createCard(teamCard[i].image, teamCard[i].name,teamCard[i].role, position);
}

// Questa funzione crea le card nella posizione desiderata.
function createCard(image, fullName, role, classWhereAppendCard){

    const position = document.querySelector('.' + classWhereAppendCard);

    // Creo il div Team-Card
    const teamCard = document.createElement('div');
    teamCard.classList.add("team-card");
    position.appendChild(teamCard);
    
    // Creo il div Card Image
    const cardImage = document.createElement('div');
    cardImage.classList.add("card-image");

    // Creo l'immagine
    const img = document.createElement('img');
    img.src = image;
    img.alt = fullName;
    
    // Creo il div Card Text
    const cardText = document.createElement('div');
    cardText.classList.add("card-text");

    // Creo h3 nome
    const name = document.createElement('h3');
    const insertName = document.createTextNode(fullName);
    name.appendChild(insertName);

    //Creo il p 
    const jobRole = document.createElement('p');
    const insertJobrole = document.createTextNode(role);
    jobRole.appendChild(insertJobrole);


    //Uniamo tutti gli elementi della Card
    teamCard.appendChild(cardImage, cardText);
    cardImage.appendChild(img);
    teamCard.appendChild(cardText);
    cardText.appendChild(name);
    cardText.appendChild(jobRole);
}

