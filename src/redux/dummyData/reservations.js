import moment from 'moment';

export function getReservationsByDay(total, data) {
    let from = moment(data + ' 00:00:00').format('X');
    let to = moment(data + ' 23:59:59').format('X');
    return total.map(item => {
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

export function updateDevicesInfo(data) {
    if (!data.device) {
        return devices;
    }
    return devices.map(item => {
        if (item.id === data.device) {
            let from = Number(moment(data.date + ' ' + data.from).format('X'));
            let to = Number(moment(data.date + ' ' + data.to).format('X'));
            item.reservations.push({
                id: item.id,
                user_id: 1,
                from: from,
                to: to,
            });
        }
        return item;
    });
}

export const devices = [
    {
        id: 1,
        model: 'HTC One M8',
        sku: 'HT519WM00429',
        reservations: [
            {
                id: 1,
                user_id: 1,
                from: 1614236400,
                to: 1614238200,
            },
            {
                id: 2,
                user_id: 17,
                from: 1614159000,
                to: 1614160800,
            },
            {
                id: 3,
                user_id: 1,
                from: 1614249000,
                to: 1614261600,
            },
            {
                id: 4,
                user_id: 14,
                from: 1614337200,
                to: 1614340800,
            },
            {
                id: 48,
                user_id: 13,
                from: 1614263400,
                to: 1614267000,
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
                from: 1614252600,
                to: 1614256200,
            },
            {
                id: 5,
                user_id: 17,
                from: 1614346200,
                to: 1614349800,
            },
            {
                id: 6,
                user_id: 1,
                from: 1614321000,
                to: 1614328200,
            },
            {
                id: 7,
                user_id: 79,
                from: 1614337200,
                to: 1614340800,
            },
            {
                id: 99,
                user_id: 99,
                from: 1614342600,
                to: 1614349800,
            },
            {
                id: 1,
                user_id: 1,
                from: 1614236400,
                to: 1614238200,
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
                from: 1614252600,
                to: 1614256200,
            },
            {
                id: 10,
                user_id: 1,
                from: 1614342600,
                to: 1614349800,
            },
            {
                id: 1,
                user_id: 32,
                from: 1614337200,
                to: 1614340800,
            },
        ],
    },
];