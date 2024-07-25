import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// ********* REdux Thunk ************
//NB:   The  createAsyncThunk produces additional action types,
//  The pending PROMISE state, one for the FULFILLED state and
//  one for the REJECTED state
export const fetchAddress = createAsyncThunk(
  //dont use Eg "getAddress" in thunks because the "get" keyword is used for selectors
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //Payload of the FULLFILLED store
    return { position, address };
  },
);

// ********* REdux Toolkit ************
const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  //**** Connecting Redux Thunk to Reducer/
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => (state.status = "loading"))
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.position;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address Make sure to fill this field!";
      });
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
