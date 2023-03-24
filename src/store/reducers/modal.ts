import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockStores } from '../../mock/stores';

interface IModal {
    itemId: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemImage: string;
    storeId: number;
    storeName: string;
    storeNote: number;
    storeTimeToDeliver: number;
    modalOpened: boolean;
}

const initialState: IModal = {
    itemId: 0,
    itemName: '',
    itemDescription: '',
    itemPrice: 0,
    itemImage: '',
    storeId: 0,
    storeName: '',
    storeNote: 0,
    storeTimeToDeliver: 0,
    modalOpened: false
}

interface IPayload {
    idItem: number;
    idStore: number;
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<IPayload>) => {
            const { idItem, idStore } = action.payload;
            const store = mockStores.find(store => store.id === idStore);
            const item = store?.items.find(item => item.id === idItem);

            return state = {
                itemId: idItem,
                itemName: item?.name || '',
                itemDescription: item?.description || '',
                itemPrice: item?.price || 0,
                itemImage: item?.image || '',
                storeId: idStore,
                storeName: store?.name || '',
                storeNote: store?.note || 0,
                storeTimeToDeliver: store?.timeToDeliver || 0,
                modalOpened: true
            };
        },
        closeModal: () => initialState
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;