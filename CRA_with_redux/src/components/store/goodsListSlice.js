import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../../env.json';

const { initGoods, initStatus, initError, initGoodsObj, initNameList } = env.initialStates;

export const fetchGoods = createAsyncThunk (
    'goods/fetchGoods',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('../../db.json');
            if(!response) throw new Error('Server error');
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const goodsListSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: initGoods,
        status: initStatus,
        error: initError,
        goodsObj: initGoodsObj,
        nameList: initNameList,
    },
    extraReducers: {
        [ fetchGoods.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ fetchGoods.fulfilled ]: (state, action) => {
            const data = action.payload;
            state.status = 'success';
            state.goods = data;
            // data-> ассоциативный массив товаров
            state.goodsObj = data.reduce((acc, item) => {
                acc[item['id']] = item;
                return acc;
            }, {});
            // коллекция - список категорий
            const list = new Set();
            data.forEach(item => list.add(item.category));
            list.forEach(item => {
                const good = data.find(elem => elem.category === item);
                state.nameList[good.category] = good.catName;
            });
        },
        [ fetchGoods.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

// массив товаров
export const selectGoods = state => state.goods.goods;
// ассоциативный массив товаров
export const selectGoodsObj = state => state.goods.goodsObj;
// массив категорий и их имен
export const selectNameList = state => state.goods.nameList;
//
export const selectError = state => state.goods.error;
//
export const selectStatus = state => state.goods.status;
export default goodsListSlice.reducer;