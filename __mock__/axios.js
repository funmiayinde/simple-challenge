import { OPEN_STREET_URL } from "../app/utils/helper";

const axios = jest.createMockFromModule('axios');

axios.get = jest.fn((url) => {
    if (url === OPEN_STREET_URL) {
        return Promise.resolve({
            data:  {
                
            }
        })
    }
});

export default axios;