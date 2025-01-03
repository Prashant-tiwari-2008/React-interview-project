export const fetchProduct = async (pageNumber, pageCount) => {
    let skip = pageNumber * 10;
    console.log(skip)
    const result = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
    const response = await result.json();
    return response;
}   