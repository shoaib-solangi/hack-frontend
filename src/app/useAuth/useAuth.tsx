// // hooks/useAuth.js
// import useUserStore from '@/Zustand/useUserStore';
// import { useEffect } from 'react';

// const useAuth = () => {
//   const {setUser} = useUserStore();
  


//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       console.log(user);
      
//       if (user) {
//         setUser(user.uid); 
//       } else {
        
//       }
//     });

//     return () => unsubscribe(); // Clean up on unmount
//   }, [setUser]);

//   return useUserStore((state) => state.user);
// };

// export default useAuth;
