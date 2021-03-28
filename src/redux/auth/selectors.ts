import { createSelector } from "reselect"
import { RootState } from "../store"

const self = (state: RootState) => state

export const getUser = createSelector(self, state => state.auth.user)