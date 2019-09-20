export default (state = {meetups: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MEETUPS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MEETUPS':
            return {
                meetups: action.payload,
                loading: false
            }
        case 'ADD_MEETUP':
            return {
                ...state,
                loading: true
            }
        case 'MEETUP_ADDED':
            return {
                meetups: [...state.meetups, action.payload],
                loading: false
            }
        case 'DELETE_MEETUP':
            return {
                ...state
            }
        case 'MEETUP_DELETED':
            return {
                ...state,
                meetups: action.payload.meetups
            }
        default:
            return state
    }
}

// export function deleteExpenses(id) {
//     return (dispatch) => {
//       dispatch({ type: 'DELETE_EXPENSES' });
//       return fetch(`/api/expenses/${id}`, {
//         method:'DELETE',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           id: id
//         })
//       })
//       .then((res) => res.json())
//       .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_DELETED_EXPENSE', payload: responseJson})
//         return responseJson;
//       })
//     }
//   }

//   def destroy
//     expense = Expense.find(expense_params[:id])
//     if expense.delete
//       render json: Expense.all, status: 412
//     else
//       render json: { message: "expense deleted", success: 'ok'}
//     end
//   end



// case 'DELETE_EXPENSES':
//       return state

//     case 'SUCCESSFULLY_DELETED_EXPENSE':
//       return action.payload


