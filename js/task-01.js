const List = document.getElementById("categories");

const ListItem = List.querySelectorAll("li.item");
console.log(`Numbers of categories:  ${ListItem.length}`);

ListItem.forEach(item => {
    const Title = item.querySelector("h2").textContent;

    const Elements = item.querySelectorAll("ul li");
    const number = Elements.length;

    console.log(`Category: ${Title}`);
    console.log(`Elements: ${number}`);

    Elements.forEach(element => {
      const elementText = element.textContent;
        element.classList.add('element');
      
    });
});