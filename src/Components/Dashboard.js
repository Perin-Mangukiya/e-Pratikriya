import React from 'react'
import NavBar from './NavBar'
import '../Dashboard.css'
import Header from './Header'

const Dashboard = () => {
  
  return (
    <div >
    
      <Header></Header>

      <div className="container-fluid">
        <div className="row">

          <NavBar></NavBar>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>

              <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="2130" height="898" style={{display: "block", width: "1065px", height: "449px"}}></canvas>

              <h2>Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>text</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>placeholder</td>
                      <td>irrelevant</td>
                      <td>visual</td>
                      <td>layout</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>data</td>
                      <td>rich</td>
                      <td>dashboard</td>
                      <td>tabular</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>information</td>
                      <td>placeholder</td>
                      <td>illustrative</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>text</td>
                      <td>random</td>
                      <td>layout</td>
                      <td>dashboard</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>dashboard</td>
                      <td>irrelevant</td>
                      <td>text</td>
                      <td>placeholder</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>dashboard</td>
                      <td>illustrative</td>
                      <td>rich</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>placeholder</td>
                      <td>tabular</td>
                      <td>information</td>
                      <td>irrelevant</td>
                    </tr>
                    <tr>
                      <td>1,008</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>text</td>
                    </tr>
                    <tr>
                      <td>1,009</td>
                      <td>placeholder</td>
                      <td>irrelevant</td>
                      <td>visual</td>
                      <td>layout</td>
                    </tr>
                    <tr>
                      <td>1,010</td>
                      <td>data</td>
                      <td>rich</td>
                      <td>dashboard</td>
                      <td>tabular</td>
                    </tr>
                    <tr>
                      <td>1,011</td>
                      <td>information</td>
                      <td>placeholder</td>
                      <td>illustrative</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,012</td>
                      <td>text</td>
                      <td>placeholder</td>
                      <td>layout</td>
                      <td>dashboard</td>
                    </tr>
                    <tr>
                      <td>1,013</td>
                      <td>dashboard</td>
                      <td>irrelevant</td>
                      <td>text</td>
                      <td>visual</td>
                    </tr>
                    <tr>
                      <td>1,014</td>
                      <td>dashboard</td>
                      <td>illustrative</td>
                      <td>rich</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,015</td>
                      <td>random</td>
                      <td>tabular</td>
                      <td>information</td>
                      <td>text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>


    <script src="/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossOrigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossOrigin="anonymous"></script><script src="dash.js"></script>
  

</div>
    
  )
}

export default Dashboard