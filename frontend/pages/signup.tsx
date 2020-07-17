import Layout from '../components/Layout'

const SignUpPage = () => (
  <Layout title="Sign Up | Rust starter">
    <div id="signup">
        <form action="/api/signup" method="post">
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="confirm_password" className="form-control" placeholder="Confirm password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    </div>
  </Layout>
)

export default SignUpPage