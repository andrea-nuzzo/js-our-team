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

const teamContainer = document.querySelector('.team-container');

for( let i = 0; i < teamCard.length; i++){

    teamContainer.innerHTML += 
    `<div class="team-card">
     <div class="card-image">
        <img
          src=${teamCard[i].image}
          alt=${teamCard[i].name}
        />
      </div>
      <div class="card-text">
        <h3>${teamCard[i].name}</h3>
        <p>${teamCard[i].role}</p>
      </div>
      </div>`;

}


function createCard(image, name, role){
    

}