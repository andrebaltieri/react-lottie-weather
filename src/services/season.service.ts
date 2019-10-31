const get = (month: number, latitude: number) => {
    if (latitude > 0) {
        switch (month) {
            case 12:
            case 1:
            case 2:
                return 'winter';

            case 3:
            case 4:
            case 5:
                return 'spring';

            case 6:
            case 7:
            case 8:
                return 'summer';

            case 9:
            case 10:
            case 11:
                return 'fall';
        }
    } else {
        switch (month) {
            case 12:
            case 1:
            case 2:
                return 'summer';

            case 3:
            case 4:
            case 5:
                return 'fall';

            case 6:
            case 7:
            case 8:
                return 'winter';

            case 9:
            case 10:
            case 11:
                return 'spring';
        }
    }
}

export default get;