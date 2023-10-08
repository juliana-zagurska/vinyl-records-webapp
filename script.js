//localStorage.clear();

document.getElementById("go-back").addEventListener("click", () => {
  window.history.back();
  console.log("go-back clicked");
});


const recordData = [
  {
    name: 'Nothing\'s Gonna Hurt You Baby',
    author: 'Cigarettes After Sex',
    image: 'assets/image1@1x.png',
    year: '2010',
    style: 'Alternative',
    country: 'USA'
  },
  {
    image: 'assets/image2@1x.jpg',
    name: 'Let It Be',
    author: 'The Beatles',
    year: '1960',
    style: 'Rock',
    country: 'UK'
  },
  {
    image: 'assets/image3@1x.jpg',
    name: 'Paint The Town Red',
    author: 'Doja Cat',
    year: '2020',
    style: 'Pop',
    country: 'USA'
  },
  {
    image: 'assets/image4@1x.jpg',
    name: 'Who Let The Dogs Out',
    author: 'Baha Men',
    year: '2000',
    style: 'House, Ragga, Hip-Hop',
    country: 'USA'
  },
  {
    image: 'assets/image5@1x.jpg',
    name: 'U Can\'t touch this',
    author: 'MC Hammer',
    year: '1990',
    style: 'Hip-Hop, Rap',
    country: 'USA'
  },
  {
    image: 'assets/image6@1x.jpg',
    name: '7 Seconds',
    author: 'Youssou N\'Dour',
    year: '1990',
    style: 'Electronic, Hip-Hop',
    country: 'USA'
  },
  {
    image: 'assets/image7@1x.jpg',
    name: 'Ra-Ta-Ta',
    author: 'Wencke Myhre',
    year: '1970',
    style: 'Pop',
    country: 'Germany'
  },
  {
    image: 'assets/image8@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'Japan'
  },
  {
    image: 'assets/image9@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'Canada'
  },
  {
    image: 'assets/image10@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'Australia'
  },
  {
    image: 'assets/image11@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'USA'
  },
  {
    image: 'assets/image12@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'USA'
  },
  {
    image: 'assets/image13@1x.png',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1950',
    style: 'Punk, Dub, Funk',
    country: 'Japan'
  },
  {
    image: 'assets/image14@1x.jpg',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'Canada'
  },
  {
    image: 'assets/image15@1x.png',
    name: 'Let There Be Rock',
    author: 'AC/DC',
    year: '1990',
    style: 'Punk, Dub, Funk',
    country: 'Australia'
  },
];



function createRecordElement(record) {
  const recordElement = document.createElement('div');
  recordElement.classList.add('record');

const heartIcon = document.createElement('i');
heartIcon.classList.add('fas', 'fa-heart');
heartIcon.onclick = function() {
  addToFavorites(this);
};

const heartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
heartSvg.setAttribute('width', '24');
heartSvg.setAttribute('height', '24');
heartSvg.setAttribute('viewBox', '0 0 24 24');
heartSvg.setAttribute('fill', 'none');

const heartRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
heartRect.setAttribute('width', '24');
heartRect.setAttribute('height', '24');
heartRect.setAttribute('rx', '4');
heartRect.setAttribute('fill', 'white');

const heartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
heartPath.setAttribute('d', 'M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z');
heartPath.setAttribute('stroke', 'black');
heartPath.setAttribute('stroke-width', '1.10308');
heartPath.setAttribute('stroke-linejoin', 'round');

heartSvg.appendChild(heartRect);
heartSvg.appendChild(heartPath);
heartIcon.appendChild(heartSvg);

const image = document.createElement('img');
image.src = record.image;
image.alt = record.name;
image.classList.add('retina-image');

const recordHeader = document.createElement('div');
recordHeader.classList.add('record-header');

const h1 = document.createElement('h1');
h1.innerText = record.name;

const h2 = document.createElement('h2');
h2.innerText = record.author;

recordHeader.appendChild(h1);
recordHeader.appendChild(h2);

const recordTextData = document.createElement('div');
recordTextData.classList.add('record-text-data');

const yearP = document.createElement('p');
yearP.innerHTML = `Year : <span>${record.year}</span>`;

const styleP = document.createElement('p');
styleP.innerHTML = `Style : <span>${record.style}</span>`;

const countryP = document.createElement('p');
countryP.innerHTML = `Country : <span>${record.country}</span>`;

recordTextData.appendChild(yearP);
recordTextData.appendChild(styleP);
recordTextData.appendChild(countryP);

const addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.onclick = function() {
  addToCollection(record.name, record.author, record.year, record.style, record.country);
};

const addSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
addSvg.setAttribute('width', '20');
addSvg.setAttribute('height', '20');
addSvg.setAttribute('viewBox', '0 0 20 20');
addSvg.setAttribute('fill', 'none');

const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334');
path.setAttribute('stroke', 'white');
path.setAttribute('stroke-width', '1.66667');
path.setAttribute('stroke-linecap', 'round');
path.setAttribute('stroke-linejoin', 'round');

addSvg.appendChild(path);
addButton.appendChild(addSvg);
addButton.appendChild(document.createTextNode('Add'));

recordElement.appendChild(heartIcon);
recordElement.appendChild(image);
recordElement.appendChild(recordHeader);
recordElement.appendChild(recordTextData);
recordElement.appendChild(addButton);
return recordElement;
}

function renderRecords() {
  const recordContainer = document.getElementById('record-list');

  recordData.forEach(record => {
    const recordElement = createRecordElement(record);
    recordContainer.appendChild(recordElement);
  });
}

renderRecords();


function checkInputLength() {
  const artistField = document.getElementById('artistField');
  const lengthExceededMessage = document.getElementById('lengthExceededMessage');
  artistField.maxlength = 30;

  if (artistField.value.length > artistField.maxlength) {
    lengthExceededMessage.style.display = 'block';
  } else {
    lengthExceededMessage.style.display = 'none';
  }
}


function addToCollection(recordName, author, year, style, country) {
  const collection = JSON.parse(localStorage.getItem('collection')) || [];

  collection.push({
    name: recordName,
    author: author,
    year: year,
    style: style,
    country: country
  });
  
  localStorage.setItem('collection', JSON.stringify(collection));
  alert(`Record '${recordName}' added to collection!`);
}



const itemsPerPage = 6;
let currentPage = 1;

function showItems(page) {
    const itemList = document.getElementById('record-list');
    const items = itemList.getElementsByClassName('record');

    for (let i = 0; i < items.length; i++) {
        if (i < (page - 1) * itemsPerPage || i >= page * itemsPerPage) {
            items[i].classList.add('hidden');
        } else {
            items[i].classList.remove('hidden');
        }
    }
}

    function changePage(page) {
    currentPage = page;
    showItems(currentPage);

    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach(button => button.classList.remove('focused'));

    const button = document.getElementById(`page${page}`);
    button.classList.add('focused');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('page1');
    button.classList.add('focused');
    showItems(currentPage);
  });

  showItems(currentPage);


  
  let isHeartFilled = false;
  let favorites = []; 

  function addToFavorites(heartIcon, record) {
    isHeartFilled = !isHeartFilled;
  
    const heartSvg = heartIcon.querySelector('svg');
    const heartPath = heartSvg.querySelector('path');
  
    if (isHeartFilled) {
      heartPath.setAttribute('fill', 'black');
      favorites.push(record); 
      //console.log('Added to favorites:', record);
    } else {
      heartPath.setAttribute('fill', 'none');
      const recordIndex = favorites.findIndex(fav => fav === record);
      if (recordIndex !== -1) {
        favorites.splice(recordIndex, 1);
        //console.log('Removed from favorites:', record);
      }
    }
  }
  
const searchButton = document.querySelector('.search__button button');
searchButton.addEventListener('click', handleSearch);

function handleSearch() {
  const artist = document.getElementById('artistField').value;
  const genre = document.querySelector('.search__genre select').value;
  const decade = document.querySelector('.search__decade select').value;
  const country = document.getElementById('country').value;

  const filteredRecords = recordData.filter(record => {
    return (
      (artist === '' || record.author.toLowerCase().includes(artist.toLowerCase())) &&
      (genre === '' || record.style.toLowerCase().includes(genre.toLowerCase())) &&
      (decade === '' || record.year.includes(decade)) &&
      (country === '' || record.country.toLowerCase() === country.toLowerCase())
    );
  });

  displayFilteredRecords(filteredRecords);
}

renderRecords();

function displayFilteredRecords(records) {
  const resultContainer = document.getElementById('record-list');
  resultContainer.innerHTML = ''; 

  if (records.length > 0) {
    records.forEach(record => {
      const recordElement = document.createElement('div');
      recordElement.classList.add('record');
      recordElement.innerHTML = `
        <i class="fas fa-heart" onclick="addToFavorites(this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="white"/>
            <path d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z" stroke="black" stroke-width="1.10308" stroke-linejoin="round"/>
          </svg>
        </i>
        <img src="${record.image}">
        <div class="item-header">
          <h2>${record.name}</h2>
          <p>Artist: ${record.author}</p>
        </div>
        <div class="item-text">
          <p>Genre: ${record.style}</p>
          <p>Year: ${record.year}</p>
          <p>Country: ${record.country}</p>
        </div>
        <button class="add-button" onclick="addToCollection('${record.name}', '${record.author}', '${record.year}', '${record.style}', '${record.country}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add
        </button>
      `;
      resultContainer.appendChild(recordElement);
    });
  } else {
    console.log('No matching records found.');
    const noRecordsMessage = document.createElement('div');
    noRecordsMessage.classList.add('no-records-message');
    noRecordsMessage.innerText = 'No matching records found. Try to edit your search.';
    resultContainer.appendChild(noRecordsMessage);
  }
}

