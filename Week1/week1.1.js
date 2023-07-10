function getName() {
    return new Promise((resolve, reject) => {
      const name = prompt("Enter your name:");
  
      if (name.length <= 10) {
        resolve(name);
      } else {
        reject("Name should not exceed 10 characters!");
      }
    });
  }
  
  getName()
    .then((name) => {
      console.log("Name accepted:", name);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  