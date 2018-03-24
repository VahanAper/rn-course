import {
    Navigation,
} from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'rncourse.FindPlaceScreen',
                label: 'Find Place',
                title: 'Find Place',
            },
            {
                screen: 'rncourse.SharePlaceScreen',
                label: 'Share Place',
                title: 'Share Place',
            },
        ],
    });
};

export default startTabs;
