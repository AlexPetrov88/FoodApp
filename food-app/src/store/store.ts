import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        // authUser: authUser,
        // filter: filter,
        // likedProperties: likedProperties,
        // registerAdmin: registerAdminSlice,
        // [propertiesApi.reducerPath]: propertiesApi.reducer,
        // [imagesApi.reducerPath]: imagesApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
        // [adminApi.reducerPath]: adminApi.reducer,
    }
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware({ serializableCheck: false })
    //         .concat(propertiesApi.middleware)
    //         .concat(imagesApi.middleware)
    //         .concat(authApi.middleware)
    //         .concat(adminApi.middleware);
    // },
});

setupListeners(store.dispatch);

export default store;
