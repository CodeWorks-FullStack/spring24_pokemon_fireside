import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: /*html*/`
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <form onsubmit="app.HomeController.find()">
            <div class="d-flex">
              <input placeholder="find a pokemon" type="text" class="form-control" name="search" required>
              <button type="submit" class="btn btn-success" title="Search"><i class="mdi mdi-send"></i></button>
            </div>  
          </form>

          <div class="my-3" id="result"></div>

        </div>
        <div class="col-md-6" id="myPokemons"></div>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




