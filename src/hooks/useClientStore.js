import { useDispatch, useSelector } from 'react-redux';
import appApi from '../api/appApi';
import { setClients, setLoading } from '../store/slices/client/clientSlice';

export const useClientStore = () => {
    const { isLoading, clients, fields } = useSelector((state) => state.client);
    const dispatch = useDispatch();

    const startGetClients = async () => {
        dispatch(setLoading);
        try{
            const { data } = await appApi.get('/client/all');
            dispatch( setClients( {clients: data.clients} ) )
        }catch (error){
            console.log(error)
        } 
    };

    return {
        // Properties
        clients,
        isLoading,
        fields,
        // Methods
        startGetClients
    };
};
