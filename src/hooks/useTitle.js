import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sell Today `
    },[title]);
};

export default useTitle;