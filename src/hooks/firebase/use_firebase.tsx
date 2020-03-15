import {useContext} from 'react';
import {Context as FirebaseContext} from '../../context/firebase.context';

const useFirebase = () => {
    return useContext(FirebaseContext);
};

export default useFirebase;