const images = [
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-07-at-13.20.14-2-300x300.jpeg",
      description: "Maillot Club Africain 2023-11-07",
      price: "120 DT"
    },
 
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-13.18.43_27dcdaee-300x300.jpg",
      description: "Maillot Club Africain 2024-01-25",
      price: "130 DT"
    },
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-17.24.42_0dfe4bda-300x300.jpg",
      description: "Maillot Club Africain 2023-12-17",
      price: "100 DT"
    },
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-12-14-at-11.58.56_60cbe8f5-300x300.jpg",
      description: "Maillot Club Africain 2023-09",
      price: "90 DT"
    },
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2023/12/WhatsApp-Image-2024-01-09-at-15.47.50_b67d1c2c-300x300.jpg",
      description: "Maillot Club Africain 2024-01-09",
      price: "115 DT"
    },
    {
      imageUrl: "https://clubafricain.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-14-at-07.05.08_252df5a6-1-300x300.jpg",
      description: "Maillot Club Africain 2023-12-14",
      price: "105 DT"
    }
  ];
const main = document.querySelector("main")
const htmlStrings = images.map(item => `
    <div class="card">
      <img src="${item.imageUrl}" alt="${item.description}">
      <div class="card-body">
        <h5 class="card-title">${item.description}</h5>
        <p class="card-text">Price: ${item.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  `).join('');
  
  main.innerHTML= htmlStrings