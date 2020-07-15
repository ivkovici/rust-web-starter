import Link from 'next/link'
import Layout from '../components/Layout'

const SignUpPage = () => (
  <Layout title="Sign Up | Next.js + TypeScript Example">
    <div id="signup">
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
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