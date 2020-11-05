
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 0
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    event.preventDefault();
    console.log('clicked');
    var newForm = this.state.form + 1;
    this.setState({
      form: newForm
    })
  }

  render() {
    if (this.state.form === 0) {
      return (
        <button onClick={this.clickHandler} > Checkout </button>
      )
    } else if (this.state.form === 1) {
      return (
        <Form1 clickHandler={this.clickHandler} />
      )
    } else if (this.state.form === 2) {
      return (
        <Form2 clickHandler={this.clickHandler} />
      )
    } else if (this.state.form === 3) {
      return (
        <Form3 clickHandler={this.clickHandler} />
      )
    } else if (this.state.form === 4) {
      return (
        <Form4 />
      )
    }
  }
}

function Form1(props) {
  console.log('hello');
  // collect name, email, and password for account creation
  console.log(props);
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button onClick={props.clickHandler}> Go to address </button>
    </form>
  )
}

function Form2(props) {
  console.log('hello');
  // collect ship to address (line 1, line 2, city, state, zip code) and phone number
  return (
    <div> Ship to address:
      <form> 
        <label>
          Line 1:
          <input type="address" />
        </label>
        <label>
          Line 2:
          <input type="address" />
        </label>
        <label>
          City:
          <input type="address" />
        </label>
        <label>
          State:
          <input type="address" />
        </label>
        <label>
          Zip Code:
          <input type="address" />
        </label>
        <label>
          Phone Number:
          <input type="text" />
        </label>
      </form>
      <button onClick={props.clickHandler}> Go to payment </button>
    </div>
  )
}

function Form3(props) {
  console.log('hello');
  // collect credit #, expiration date, cvv, and billing zip code
  return (
    <div>
      <form>
        <label>
          Credit card #:
          <input type="text" />
        </label>
        <label>
          Expiration date:
          <input type="text" />
        </label>
        <label>
          CVV:
          <input type="text" />
        </label>
        <label>
          Billing zip code:
          <input type="text" />
        </label>
      </form>
        <button onClick={props.clickHandler}> Purchase </button>
    </div>
  )
}

function Form4(props) {
  console.log('hello');
  // collect credit #, expiration date, cvv, and billing zip code
  return (
  <div>
    <h3> Confirmation will be emailed to you shortly. </h3>
    <h1> Thank you for your purchase! </h1>
  </div>
  )
}

ReactDOM.render(<Cart />, document.getElementById('app'));