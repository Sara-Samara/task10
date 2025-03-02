const getCategoryProduct = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/categories");
    return data;
}

const displayCategory = async () => {
    const categories = await getCategoryProduct();
    const category = categories.map((category) => {
        return `
           <div class ="category">
           <h2>${category}</h2>
           <a href="./details.html?category=${category}">products</a>
        </div>
        
        `;
    }).join('');
    document.querySelector("section .container .row").innerHTML = category;

}

displayCategory();