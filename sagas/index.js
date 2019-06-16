import { takeEvery, all } from "redux-saga/effects";

// import { types as applicationType } from "../reducers/application";
// import * as applicationSaga from "../sagas/application";

export default function* rootSaga() {
  yield all([
    // takeEvery(applicationType.UPDATE_WEB3, applicationSaga.updateNetworkId),
  ]);
}
