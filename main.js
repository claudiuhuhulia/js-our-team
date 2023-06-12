const unorderedList = document.querySelector('ul');


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
    TeamList +=`<li> 
    <p><img src=img/${teamMember.img}></p>
    <p>${teamMember.Name}</p>
    <p>${teamMember.Role}</p>
     </li>`

}

unorderedList.innerHTML=TeamList;

