// helperFunctions.js
import { axios } from 'axios'
// Fetch data based on the sort order
export const fetchData = async (sort, setData) => {
    try {
        let response;
        if (sort === "no") {
            response = await axios.get(`http://localhost:5000/getCollection`);
        } else if (sort === "rentLowToHigh") {
            response = await axios.get(`http://localhost:5000/collections/filter/rent/lowtohigh`);
        } else if (sort === "rentHighToLow") {
            response = await axios.get(`http://localhost:5000/collections/filter/rent/highttolow`);
        } else if (sort === "buyLowToHigh") {
            response = await axios.get(`http://localhost:5000/collections/filter/buy/lowtohigh`);
        } else {
            response = await axios.get(`http://localhost:5000/collections/filter/buy/highttolow`);
        }
        setData(response.data);
        console.log("Data fetched:", response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Handle form submission for adding items to cart
export const handleSubmit = async (
    e, name, image, rentPrice, buyPrice, description, status, userId, productId, kind, selfStatus, navigate
) => {
    e.preventDefault();
    if (userId == null) {
        navigate('/login-page');
    } else {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('description', description);
            formDataToSend.append('buyPrice', buyPrice);
            formDataToSend.append('rentPrice', rentPrice);
            formDataToSend.append('status', status);
            formDataToSend.append('userId', userId);
            formDataToSend.append('image', image);

            // Post form data
            const response = await axios.post(
                `http://localhost:5000/collectionsAddToCart/${JSON.stringify([productId, userId, name, description, buyPrice, rentPrice, status, selfStatus.selfStatus])}`,
                'null', { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.status === 201) {
                if (kind.kind === "Rent") {
                    await axios.put(`http://localhost:5000/collectionsAddToCart/rent/${productId}`, 'null', {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                }
                if (kind.kind === "Buy") {
                    await axios.put(`http://localhost:5000/collectionsAddToCart/buy/${productId}`, 'null', {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                }
                window.location.reload();
                alert('Item added to Cart successfully');
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
};

// Pagination handler
export const handlePageChange = (pageNumber, setCurrentPageNumber) => {
    setCurrentPageNumber(pageNumber);
};

// Handle option change for sorting
export const handleOptionChange = async (event, navigate, setSelectedOption) => {
    const option = event.target.value;
    setSelectedOption(option);
    navigate(`/allProduct?sort=${option}`);
    window.location.reload();
};
