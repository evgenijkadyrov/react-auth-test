import {User} from "firebase/auth";

export type AuthContextType = {
    user: User | null;
    login: () => void;
    logout: () => void;
};
