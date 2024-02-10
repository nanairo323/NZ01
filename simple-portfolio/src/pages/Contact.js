import React, { useState } from 'react';

const Contact = () => {
    const [message, updateMessage] = useState('');

    const Message = (event) => {
        updateMessage(event.target.value);
    };

    return (
<section>
    <h2>Contact</h2>
    <form>
        <div class="formlabel">
            <label for="message">Please Leave a Message:</label>
            <textarea
                rows="4" cols="30" id="message" name="message" value={message} onChange={Message}
            ></textarea>
        </div>
        <br />
        <button type="submit" aria-label="Submit Message">Submit</button>
    </form>
</section>
    );
};

export default Contact;