import { dashboard, expenses, transactions, trend } from '../utils/icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'Exercise',
        icon: transactions,
        link: '/exercise',
    },
    {
        id: 3,
        title: 'Exercise Data',
        icon: expenses,
        link: '/exercise-data',
    },
    {
        id: 4,
        title: 'Measurement',
        icon: expenses,
        link: '/measurement',
    },
    {
        id: 5,
        title: 'Weight',
        icon: trend,
        link: '/weight',
    },
    {
        id: 6,
        title: 'Targets',
        icon: trend,
        link: '/targets',
    }
    // ,
    // {
    //     id: 7,
    //     title: 'Images Uploads',
    //     icon: trend,
    //     link: '/image-uploads',
    // }
];