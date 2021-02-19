import moment from 'moment';

export function getReservationsByDay(data) {
    let from = moment(data + ' 00:00:00').format('X');
    let to = moment(data + ' 23:59:59').format('X');
    return devices.map(item => {
        return {
            id: item.id,
            model: item.model,
            sku: item.sku,
            reservations: item.reservations.filter(reservation => {
                return reservation.from > from && reservation.to < to;
            }),
        };
    });
}

const devices = [
    {
        id: 1,
        model: 'HTC One M8',
        sku: 'HT519WM00429',
        reservations: [
            {
                id: 1,
                user_id: 1,
                from: 1614002400,
                to: 1614011400,
            },
            {
                id: 2,
                user_id: 17,
                from: 1614011400,
                to: 1614013200,
            },
            {
                id: 3,
                user_id: 44,
                from: 1613980800,
                to: 1614002400,
            },
            {
                id: 4,
                user_id: 44,
                from: 1613835000,
                to: 1613842200,
            },
            {
                id: 48,
                user_id: 19,
                from: 1613714400,
                to: 1613730600,
            }
        ],
    },
    {
        id: 2,
        model: 'Motorola Moto X 2014',
        sku: 'TA9890AQPQ',
        reservations: [
            {
                id: 5,
                user_id: 81,
                from: 1613894400,
                to: 1613898000,
            },
            {
                id: 5,
                user_id: 17,
                from: 1613980800,
                to: 1614002400,
            },
            {
                id: 6,
                user_id: 1,
                from: 1614011400,
                to: 1614013200,
            },
            {
                id: 7,
                user_id: 79,
                from: 1613820600,
                to: 1613829600,
            },
            {
                id: 99,
                user_id: 99,
                from: 1613748600,
                to: 1613750400,
            },
            {
                id: 8,
                user_id: 1,
                from: 1613829600,
                to: 1613840400,
            },
        ],
    },
    {
        id: 3,
        model: 'Samsung Galaxy A51',
        sku: 'SAGA2004A51',
        reservations: [
            {
                id: 9,
                user_id: 17,
                from: 1613732400,
                to: 1613743200,
            },
            {
                id: 10,
                user_id: 1,
                from: 1613719800,
                to: 1613723400,
            },
            {
                id: 11,
                user_id: 32,
                from: 1614155400,
                to: 1614162600,
            },
        ],
    },
    {
        id: 4,
        model: 'Apple iPhone 8',
        sku: 'APP989UY',
        reservations: [
            {
                id: 12,
                user_id: 15,
                from: 1614162600,
                to: 1614173400,
            },
            {
                id: 13,
                user_id: 17,
                from: 1614234600,
                to: 1614238200,
            },
            {
                id: 14,
                user_id: 1,
                from: 1614065400,
                to: 1614072600,
            },
        ],
    },
];