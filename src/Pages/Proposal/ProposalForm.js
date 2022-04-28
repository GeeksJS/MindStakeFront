import React from 'react'

export default function ProposalForm() {

    
    return (
        <div>
            <>
                {/* Multi step form */}
                <section className="multi_step_form">
                    <form id="msform">
                        {/* Tittle */}
                        <div className="tittle">
                            <h2>Verification Process</h2>
                            <p>
                                In order to use this service, you have to complete this verification
                                process
                            </p>
                        </div>
                        {/* progressbar */}
                        <ul id="progressbar">
                            <li className="active">Verify Phone</li>
                            <li>Upload Documents</li>
                            <li>Security Questions</li>
                        </ul>
                        {/* fieldsets */}
                        <fieldset>
                            <h3>Setup your phone</h3>
                            <h6>We will send you a SMS. Input the code to verify.</h6>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-control"
                                        placeholder={+880}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={1123456789}
                                    />
                                </div>
                            </div>
                            <div className="done_text">
                                <a href="#" className="don_icon">
                                    <i className="ion-android-done" />
                                </a>
                                <h6>
                                    A secret code is sent to your phone. <br />
                                    Please enter it here.
                                </h6>
                            </div>
                            <div className="code_group">
                                <input type="text" className="form-control" placeholder={0} />
                                <input type="text" className="form-control" placeholder={0} />
                                <input type="text" className="form-control" placeholder={0} />
                                <input type="text" className="form-control" placeholder={0} />
                            </div>
                            <button type="button" className="action-button previous_button">
                                Back
                            </button>
                            <button type="button" className="next action-button">
                                Continue
                            </button>
                        </fieldset>
                        <fieldset>
                            <h3>Verify Your Identity</h3>
                            <h6>Please upload any of these documents to verify your Identity.</h6>
                            <div className="passport">
                                <h4>
                                    Govt. ID card <br />
                                    PassPort <br />
                                    Driving License.
                                </h4>
                                <a href="#" className="don_icon">
                                    <i className="ion-android-done" />
                                </a>
                            </div>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="upload" />
                                    <label className="custom-file-label" htmlFor="upload">
                                        <i className="ion-android-cloud-outline" />
                                        Choose file
                                    </label>
                                </div>
                            </div>
                            <ul className="file_added">
                                <li>File Added:</li>
                                <li>
                                    <a href="#">
                                        <i className="ion-paperclip" />
                                        national_id_card.png
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ion-paperclip" />
                                        national_id_card_back.png
                                    </a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="action-button previous previous_button"
                            >
                                Back
                            </button>
                            <button type="button" className="next action-button">
                                Continue
                            </button>
                        </fieldset>
                        <fieldset>
                            <h3>Create Security Questions</h3>
                            <h6>Please update your account with security questions</h6>
                            <div className="form-group">
                                <select className="product_select">
                                    <option data-display="1. Choose A Question">
                                        1. Choose A Question
                                    </option>
                                    <option>2. Choose A Question</option>
                                    <option>3. Choose A Question</option>
                                </select>
                            </div>
                            <div className="form-group fg_2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Anwser here:"
                                />
                            </div>
                            <div className="form-group">
                                <select className="product_select">
                                    <option data-display="1. Choose A Question">
                                        1. Choose A Question
                                    </option>
                                    <option>2. Choose A Question</option>
                                    <option>3. Choose A Question</option>
                                </select>
                            </div>
                            <div className="form-group fg_3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Anwser here:"
                                />
                            </div>
                            <button
                                type="button"
                                className="action-button previous previous_button"
                            >
                                Back
                            </button>
                            <a href="#" className="action-button">
                                Finish
                            </a>
                        </fieldset>
                    </form>
                </section>
                {/* End Multi step form */}
            </>

        </div>
    )
}
