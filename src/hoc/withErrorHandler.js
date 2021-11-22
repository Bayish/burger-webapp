import React, {useEffect, useMemo, useState} from 'react';
import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const icId = useMemo(() => {
            return axios.interceptors.response.use(
                null,
                error => {
                    setError(error);
                    throw error;
                }
            )
        }, []);

        useEffect(() =>{
            return () => {
                axios.interceptors.response.eject(icId)
            }
        }, [icId])

        console.log(icId)

        const dismiss = () => {
            setError(null)
        }
        return (
            <>
                <Modal show={Boolean(error)} close={dismiss}>{error && error.message}</Modal>
                <WrappedComponent {...props}/>
            </>
        )
    };
};

export default withErrorHandler;