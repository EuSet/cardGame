import {StateType} from "../redux/store";

interface IRootState extends StateType {}

export const selectAllValues = (state: IRootState) => state.playPage;