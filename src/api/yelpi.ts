import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SszBEEYGNE5exDcOR3_5m23Wchw2Nb3vQrl9XaDUXFTeAMD-WB4PavqH481hYuGTu6rRtizWyku6owy2uxu6arIFGKdDJD0qOV_ITwTSkhxnpjzdYU7csNgP254ZYHYx'
    }
})