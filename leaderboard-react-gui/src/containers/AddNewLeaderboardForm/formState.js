export const formState = {
    leaderboard: {
        id: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'ID',
                placeholder: 'Enter ID'
            },
            value: '',
            validation: {
                required: true,
                minLength: 4
            },
            valid: false,
            touched: false
        },
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Name',
                placeholder: 'Enter name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        type: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'public', displayValue: 'Public'},
                    {value: 'private', displayValue: 'Private'}
                ]
            },
            value: 'public',
            validation: {},
            valid: true
        },
        league: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'afl', displayValue: 'AFL'},
                    {value: 'nba', displayValue: 'NBA'}
                ]
            },
            value: 'afl',
            validation: {},
            valid: true
        }
    },
    loading: false,
    valid: false
};