import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'create-account-view',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1600,
        windowHeight: 800,
        canvasMargin: {
            top: 0,
            left: 0,
            bottom: 317,
            right: 0,
        },
    },
});
