import "./index.css";
import {ContainerData} from "./Data";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="row gx-0" id="dashboard">
        <div className="col-5 col-sm-4 col-md-3 col-xl-2 min-vh-100 gx-4 b-right">
          <Sidebar />
        </div>
        <div className="col-7 col-sm-8 col-md-9 col-xl-10">
          <div class="container">
            <div class="row g-0">
              {ContainerData.map((i) => {
                const {id, name, description, image, icon} = i;
                return (
                  <div class="col-lg-4 col-md-6 col-xxl-3 mb-4 g-4" key={id}>
                    <div className="card">
                      <div class="card-body text-center">
                        <div class="btn-group float-end">
                          <a
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="d-end">{icon}</span>
                            <span class="visually-hidden">Toggle Dropdown</span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end dropdown-style">
                            <li>
                              <a class="dropdown-item fs-14">Module Info</a>
                            </li>
                            <li>
                              <a class="dropdown-item  fs-14">Learn More</a>
                            </li>
                          </ul>
                        </div>

                        <img src={image} alt="img" class=" mb-2" />

                        <h6>{name}</h6>
                        <h6 className="description">{description}</h6>
                        <div className="mb-2">
                          <a
                            href="https://www.aarsol.com/"
                            target="_blank"
                            className="info-btn"
                            rel="noreferrer"
                          >
                            Learn More
                          </a>
                        </div>

                        <button className="install-btn">install</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
