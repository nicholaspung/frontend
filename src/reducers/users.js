// import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAIL } from "../actions";

// const initialUserState = {
//   users: [],
//   error: false,
//   newlyAddedUser: {},
//   addingNewUser: false
// };

// const users = (state = initialUserState, action) => {
//   switch (action.type) {
//     case ADD_USER_START:
//       return {
//         ...state,
//         error: "",
//         addingNewUser: true
//       };

//     case ADD_USER_SUCCESS:
//       return {
//         ...state,
//         newlyAddedUser: action.payload,
//         error: "",
//         addingNewUser: false
//       };

//     case ADD_USER_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         addingNewUser: false
//       };

//     default:
//       return state;
//   }
// };

// export default users;
