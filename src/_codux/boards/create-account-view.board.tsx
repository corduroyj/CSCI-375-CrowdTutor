import { createBoard } from '@wixc3/react-board';
import CreateAccountView_board_module from './create-account-view.board.module.scss';

export default createBoard({
    name: 'create-account-view',
    Board: () => (
        <div className={CreateAccountView_board_module['create-account-back']}>
            <div className={CreateAccountView_board_module['left-panel']} />
            <div className={CreateAccountView_board_module['right-panel']}>
                <div className={CreateAccountView_board_module['create-account-form-base']}>
                    <h1 className={CreateAccountView_board_module['create-header']}>
                        Create Account{' '}
                    </h1>
                    <form action="create-acc.php" method="POST">
                        <label className={CreateAccountView_board_module['form-label']}>
                            First name{' '}
                            <b className={CreateAccountView_board_module['red-text']}>*</b>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className={CreateAccountView_board_module['form-inputs']}
                            placeholder="Type your first name"
                        />
                        <hr className={CreateAccountView_board_module['form-hr']} />

                        <label className={CreateAccountView_board_module['form-label']}>
                            Last name{' '}
                            <b className={CreateAccountView_board_module['red-text']}>*</b>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            className={CreateAccountView_board_module['form-inputs']}
                            placeholder="Type your last name"
                        />
                        <hr className={CreateAccountView_board_module['form-hr']} />

                        <label className={CreateAccountView_board_module['form-label']}>
                            Email <b className={CreateAccountView_board_module['red-text']}>*</b>
                        </label>
                        <input
                            type="text"
                            name="email"
                            className={CreateAccountView_board_module['form-inputs']}
                            placeholder="Enter your email"
                        />
                        <hr className={CreateAccountView_board_module['form-hr']} />
                        <br />

                        <label className={CreateAccountView_board_module['form-label']}>
                            Password <b className={CreateAccountView_board_module['red-text']}>*</b>
                        </label>
                        <input
                            type="text"
                            name="pass"
                            className={CreateAccountView_board_module['form-inputs']}
                            placeholder="Type your password"
                        />
                        <hr className={CreateAccountView_board_module['form-hr']} />

                        <label className={CreateAccountView_board_module['form-label']}>
                            Confirm Password{' '}
                            <b className={CreateAccountView_board_module['red-text']}>*</b>
                        </label>
                        <input
                            type="text"
                            name="passConfirm"
                            className={CreateAccountView_board_module['form-inputs']}
                            placeholder="Re-type your password"
                        />
                        <hr className={CreateAccountView_board_module['form-hr']} />
                        <br />
                        <input
                            type="submit"
                            value="Create Account"
                            className={CreateAccountView_board_module['form-btn']}
                        />
                    </form>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 800,
        canvasHeight: 1132.6052431031856,
        windowWidth: 1800,
    },
});
