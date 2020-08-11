import React from "react";

export default () => (
  <div>
    <h2>Contact Monitaur</h2>
			<form method="post" action="https://form.monitaur.net/post">
    <p>
				<label>
					Name
					<input type="text" name="name" id="name" />
				</label>
    </p>
    <p>
				<label>
					Email
					<input type="email" name="email" id="email" />
				</label>
    </p>
    <p>
				<label>
					Subject
					<input type="text" name="subject" id="subject" />
				</label>
    </p>
    <p>
				<label>
					Message
					<textarea name="message" id="message" rows="5" />
				</label>
    </p>
    <p>
				<button type="submit">Send</button>
				<input type="reset" value="Clear" />
    </p>
			</form>
  </div>
);
