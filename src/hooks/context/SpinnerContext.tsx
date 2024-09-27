// "use client";
// import React, {
//   CSSProperties,
//   ReactNode,
//   createContext,
//   useContext,
//   useState,
// } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// interface SpinnerContextType {
//   loading: boolean;
//   show: () => void;
//   hidden: () => void;
// }

// export const SpinnerContext = createContext<SpinnerContextType | undefined>(
//   undefined
// );

// export const SpinnerProvider = ({ children }: { children: ReactNode }) => {
//   let [loading, setLoading] = useState(false);

//   const show = () => {
//     setLoading(true);
//   };
//   const hidden = () => {
//     setLoading(false);
//   };

//   return (
//     <SpinnerContext.Provider value={{ loading, show, hidden }}>
//       <div className="sweet-loading">
//         <ClipLoader
//           //   color={color}
//           loading={loading}
//           cssOverride={override}
//           size={150}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       </div>

//       {children}
//     </SpinnerContext.Provider>
//   );
// };
// export const useSpinner = (): SpinnerContextType => {
//   const context = useContext(SpinnerContext);
//   if (!context) {
//     throw new Error("useSpinner must be used within a SpinnerProvider");
//   }
//   return context;
// };
