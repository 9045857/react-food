// here need remaid all

export function reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                isLoading: false,
            };

        case "CLEAR_ALERT":
            return {
                ...state,
                alertName: "",
            };

        case "REMOVE_ORDER":
            return {
                ...state,
                orders: state.orders.filter((order) => payload.id !== order.id),
            };

        case "DECREASE_ORDER":
            return {
                ...state,
                orders: state.orders.map((orderItem) => {
                    if (payload.id === orderItem.id) {
                        return {
                            ...orderItem,
                            quantity:
                                orderItem.quantity === 0
                                    ? orderItem.quantity
                                    : orderItem.quantity - 1,
                        };
                    } else {
                        return { ...orderItem };
                    }
                }),
            };

        case "ADD_ORDER": {
            const orderIndex = state.orders.findIndex(
                (itemOrder) => payload.id === itemOrder.id
            );

            let newOrders = null;

            if (orderIndex < 0) {
                const newOrder = {
                    ...payload,
                    quantity: 1,
                };

                newOrders = [...state.orders, newOrder];
            } else {
                newOrders = state.orders.map((orderItem, index) => {
                    if (orderIndex === index) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                orders: newOrders,
                alertName: payload.name,
            };
        }

        case "TOOGLE_BASKET": {
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        }

        case "TOTAL_PRICE":
            const currentTotalPrice = state.orders.reduce((sum, el) => {
                return sum + el.price * el.quantity;
            }, 0);

            return {
                ...state,
                totalPrice: currentTotalPrice,
            };

        default:
            return state;
    }
}