import React, {createContext} from 'react';
import Firebase from '../api/firebase';

export const Context = createContext<any>({});

const FirebaseProvider: React.FC = ({children}) => {
    return (
        <Context.Provider value={Firebase}>
            {children}
        </Context.Provider>
    )
};

export default FirebaseProvider;