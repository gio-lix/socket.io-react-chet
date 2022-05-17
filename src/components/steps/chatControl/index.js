import {GrAttachment} from "react-icons/gr";
import {IoIosSend} from "react-icons/io";

const StepTwo = () => {
    return (
        <>
            <div className="online__users">
                <h2>Mollie anderson</h2>
                <div className="online__users__chat">
                    <div>
                    <span className="message">
                        <img
                            src={require("../../../assets/user.svg").default}
                            className="online__users__img"
                            alt="alt"
                        />
                        <p>molli where are you</p>
                    </span>
                    </div>
                    <div>
                        <form>
                      <textarea
                          placeholder="Type...."
                      />
                            <label htmlFor="hidden-file">
                                <GrAttachment/>
                            </label>
                            <input type="file" id='hidden-file' hidden/>
                            <button>
                                <IoIosSend/>
                                <span>send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StepTwo;