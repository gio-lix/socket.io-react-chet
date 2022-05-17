const StepOne = ({onUserSelect}) => {
    return (
        <>
            <div className="online__users">
                <h3 className="online__users__title">Online Users</h3>
                <ul className="online__users__ul">
                    <li onClick={() => onUserSelect("Mollie")}>
                                <span>
                                    mollie anderson
                                </span>
                        <span>2</span>
                    </li>
                    <li>
                                <span>
                                    mollie anderson
                                </span>
                        <span>2</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default StepOne;