import { render } from "react-dom";
import MailchimpSubscribe from MailchimpSubscribe;

export class Demo extends Component {
    render() {
      const url =
        "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
      return (
        <div>
          <h1>react-mailchimp-subscribe Demo</h1>
          <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" />
          <h2>Default Form</h2>
          <MailchimpSubscribe url={url} />
          <h2>Custom Form</h2>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      );
    }
  }
  
render(<Demo />, document.querySelector("#demo"));

