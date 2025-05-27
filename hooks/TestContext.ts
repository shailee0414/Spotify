import { createContext } from "react";
type ContextType = {
    test: string;
    setTest: (test: string) => void;
};

const initialState = {
    test: "",
    setTest: () => { },
};
export const TestContext = createContext<ContextType>(initialState)





//      *       *   
//     ***     ***
//    *****   *****
//   ******* *******
//  *****************
// *******************
//  *****************
//   ***************
//    *************
//     *********** 
//      *********
//       *******
//        *****
//         ***
//          *



