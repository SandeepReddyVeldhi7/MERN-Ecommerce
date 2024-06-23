import RegisterApi from "../utils/Constant.js";

const fetchCategoryWiseProduct = async(category) => {
    const response = await fetch(RegisterApi.categoryWiseProduct.url,{
        method : RegisterApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse

}

export default fetchCategoryWiseProduct;