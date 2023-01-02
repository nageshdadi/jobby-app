import './index.css'
import Header from '../Header'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    console.log(history)
    history.replace('/jobs')
  }
  return (
    <div className="bg-home-container">
      <Header />
      <div className="card">
        <h1 className="home-head">
          Find The Job That <br /> First Your Life
        </h1>
        <p className="home-para">
          Millions of people are searching for jobs, saraly informations are
          company reviews. Finf the job that fits your abilities and potential
        </p>
        <button
          type="button"
          className="findJobs-btn"
          onClick={onClickFindJobs}
        >
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Home
