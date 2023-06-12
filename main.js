const card = document.querySelector('.team');


const team = [
{
    Name : 'Wayne Barnett',
    Role : 'Founder & CEO ',
    img : 'wayne-barnett-founder-ceo.jpg',
},
{
    Name : 'Angela Caroll',
    Role : 'Chief Editor',
    img : 'angela-caroll-chief-editor.jpg',
},
{
    Name : 'Walter Gordon',
    Role : 'Office Manager',
    img : 'walter-gordon-office-manager.jpg',
},
{
    Name : 'Angela Lopez',
    Role : 'Social Media Manager',
    img : 'angela-lopez-social-media-manager.jpg',
},
{
    Name : 'Scott Estrada',
    Role : 'Developer',
    img : 'scott-estrada-developer.jpg',
},
{
    Name : 'Barbara Ramos',
    Role : 'Graphic Designer',
    img : 'barbara-ramos-graphic-designer.jpg',
},
]

let TeamList = '';

for(i = 0 ; i < team.length; i++){
    const teamMember = team[i];
    TeamList +=` <div class="mycard">
    <img src=img/${teamMember.img}>
    <h4>${teamMember.Name}</h4>
    <p>${teamMember.Role}</p>
     </div>`

}

card.innerHTML=TeamList;

