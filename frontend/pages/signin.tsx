import Layout from '../components/Layout'

const SignInPage = () => (
  <Layout title="Sign In | Rust starter">
    <div id="signin">
      <form action="/api/signin" method="post">
          <h3>Sign In</h3>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" name="rememberMe" className="custom-control-input" id="rememberMe" />
                  <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
              </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
          </p>
      </form>
    </div>
  </Layout>
)

export default SignInPage
